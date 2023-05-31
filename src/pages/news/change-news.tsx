import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IChangeNewsFormProps, IFormData } from '@allTypes/reduxTypes/newsStateTypes'
import { INewsResponse } from '@axios/news/newsManagerTypes'
import { SharedCRU } from '@components/Admin/Common'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { newsMiddleware, newsSelector } from '@redux/slices/news'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'
import { useRouter } from 'next/router'

interface MyObject {
  [key: string]: string | File
}

const ChangeNews = () => {
  const [t] = useTranslation()

  const router = useRouter()

  const newsId = router.query.path

  const individualNews = useAppSelector(newsSelector.individualNews)

  const { isChangeNewsSubmitSuccess } = useAppSelector(newsSelector.news)

  const defaultValues = useMemo(
    () => ({
      header: individualNews?.header ?? '',
      paragraph: individualNews?.paragraph ?? '',
      imageURL: individualNews?.imageURL ?? '',
    }),
    [individualNews]
  )

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
  })

  const { reset, handleSubmit } = methods
  const onSubmit = (data: IFormData) => {
    const payload: MyObject = {}

    Object.keys(data).forEach((key: string) => {
      if (
        individualNews &&
        typeof data[key as keyof IFormData] !== undefined &&
        individualNews[key as keyof INewsResponse] !== data[key as keyof IFormData]
      ) {
        payload[key as keyof IFormData] = data[key as keyof IFormData]
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
      dispatch(newsMiddleware.resetChangeNewsSubmitSuccess())
      router.push('/news')
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
              <SharedCRU individualNews={individualNews} />
            </form>
          </FormProvider>
        </div>
      )}
    </Container>
  )
}

export default ChangeNews
