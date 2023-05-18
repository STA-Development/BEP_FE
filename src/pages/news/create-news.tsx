import React, { useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ICreateNewsProps } from '@allTypes/reduxTypes/newsStateTypes'
import { Container } from '@components/Container'
import { NewsImage } from '@components/NewsImage'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { newsMiddleware, newsSelector } from '@redux/slices/news'
import { Button } from '@uiComponents/Button'
import FileField from '@uiComponents/FileField/FileField'
import TextField from '@uiComponents/FormFields/TextField'
import { createNewsValidationSchema } from '@validation/news/createNews'
import { useRouter } from 'next/router'

import { useImageUpload } from '../../hooks/ImageUpload'

const defaultValues = {
  header: '',
  paragraph: '',
  imageUrl: null,
}

const CreateNews = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { imageLoaded, handleFileChange } = useImageUpload()

  const [t] = useTranslation()

  const router = useRouter()

  const { isCreateNewsSubmitSuccess } = useAppSelector(newsSelector.news)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(createNewsValidationSchema),
    mode: 'onChange',
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: ICreateNewsProps) => {
    dispatch(newsMiddleware.createNews(data))
  }

  useEffect(() => {
    if (isCreateNewsSubmitSuccess) {
      reset(defaultValues)
      router.push('/news')
      dispatch(newsMiddleware.resetCreateNewsSubmitSuccess())
    }
  }, [isCreateNewsSubmitSuccess, reset, router])

  return (
    <Container className="mb-30 mt-15 pb-20">
      <PageHeader
        title={t(Translation.PAGE_NEWS_INDIVIDUAL_TITLE)}
        description={t(Translation.PAGE_NEWS_INDIVIDUAL_DESCRIPTION) as string}
        paths={['Home', 'News']}
      />
      <div className="mt-10 flex flex-row-reverse justify-between">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full"
          >
            <div className="mb-10 flex w-full flex-col justify-between xl:flex-row-reverse">
              <div className="space-y-4">
                <div>
                  <NewsImage image={imageLoaded} />
                </div>
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
                <div className="w-full space-y-2">
                  <p>{t(Translation.PAGE_NEWS_HEADER)}</p>
                  <TextField fieldName="header" />
                </div>
                <div className="w-full space-y-2">
                  <p>{t(Translation.PAGE_NEWS_PARAGRAPH)}</p>
                  <TextField
                    fieldName="paragraph"
                    rows={7}
                  />
                </div>
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
    </Container>
  )
}

export default CreateNews
