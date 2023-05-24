import React, { useEffect, useMemo, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import {
  FormData,
  IChangeNewsForm,
  IChangeNewsFormProps,
} from '@allTypes/reduxTypes/newsStateTypes'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons'
import { NewsImage } from '@components/NewsImage'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { newsMiddleware, newsSelector } from '@redux/slices/news'
import { Button } from '@uiComponents/Button'
import FileField from '@uiComponents/FileField/FileField'
import TextField from '@uiComponents/FormFields/TextField'
import { Loading } from '@uiComponents/Loading'
import { useRouter } from 'next/router'

import { useImageUpload } from '../../hooks/ImageUpload'

const ChangeNews = () => {
  const { imageLoaded, handleFileChange } = useImageUpload()

  const inputRef = useRef<HTMLInputElement>(null)

  const [t] = useTranslation()

  const router = useRouter()

  const newsId = router.query.path

  const individualNews = useAppSelector(newsSelector.individualNews)

  const { isChangeNewsSubmitSuccess } = useAppSelector(newsSelector.news)

  const defaultValues = useMemo(
    () => ({
      header: individualNews?.header,
      paragraph: individualNews?.paragraph,
      imageUrl: individualNews?.imageURL,
    }),
    [individualNews]
  )

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: IChangeNewsForm) => {
    const payload: Partial<FormData> = {}

    Object.keys(data).forEach((key) => {
      const value = data[key as keyof FormData]

      if (value) {
        payload[key as keyof FormData] = value
      }
    })

    const formData = {
      uuid: individualNews?.uuid,
      payload,
    }

    dispatch(newsMiddleware.changeNews(formData as IChangeNewsFormProps))
  }

  useEffect(() => {
    if (newsId) {
      dispatch(newsMiddleware.getIndividualNewsById(newsId as string))
    }
  }, [newsId])

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  useEffect(() => {
    if (isChangeNewsSubmitSuccess) {
      reset(defaultValues)
      router.push('/news')
      dispatch(newsMiddleware.resetCreateNewsSubmitSuccess())
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangeNewsSubmitSuccess, reset, router])

  return (
    <Container className="mb-30 mt-15 pb-20">
      <PageHeader
        title={t(Translation.PAGE_NEWS_INDIVIDUAL_TITLE)}
        description={t(Translation.PAGE_NEWS_INDIVIDUAL_DESCRIPTION) as string}
        paths={['Home', 'News']}
      />
      <div className="mt-5">
        <Button
          variant="text"
          LeftIcon={LeftIcon}
          onClick={() => router.back()}
        >
          {t(Translation.GO_BACK)}
        </Button>
      </div>
      {!individualNews ? (
        <Loading />
      ) : (
        <div className="mt-10 flex flex-row-reverse justify-between">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >
              <div className="mb-10 flex w-full flex-col justify-between xl:flex-row-reverse">
                <div className="space-y-4">
                  <NewsImage image={imageLoaded ?? (individualNews?.imageURL as string)} />
                  <div className="flex w-full justify-center">
                    <FileField
                      fieldName="imageUrl"
                      inputRef={inputRef}
                      type="file"
                      handleFileChange={handleFileChange}
                    />
                    <Button
                      size="bs"
                      variant="outlined"
                      type="button"
                      onClick={handleClick}
                    >
                      {t(Translation.PAGE_NEWS_UPLOAD_IMAGE)}
                    </Button>
                  </div>
                </div>

                <div className="mt-10 space-y-4 xl:mt-0 xl:w-[40%]">
                  <TextField
                    fieldName="header"
                    label={t(Translation.PAGE_NEWS_HEADER) as string}
                    id={t(Translation.PAGE_NEWS_HEADER) as string}
                  />
                  <TextField
                    fieldName="paragraph"
                    label={t(Translation.PAGE_NEWS_PARAGRAPH) as string}
                    id={t(Translation.PAGE_NEWS_PARAGRAPH) as string}
                    rows={7}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  size="bs"
                  type="submit"
                >
                  {t(Translation.PAGE_NEWS_SUBMIT)}
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      )}
    </Container>
  )
}

export default ChangeNews
