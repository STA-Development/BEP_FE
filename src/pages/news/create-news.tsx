import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ICreateNewsProps } from '@allTypes/reduxTypes/newsStateTypes'
import { SharedCRU } from '@components/Admin/Common'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { newsMiddleware, newsSelector } from '@redux/slices/news'
import { Button } from '@uiComponents/Button'
import { createNewsValidationSchema } from '@validation/news/createNews'
import { useRouter } from 'next/router'

const defaultValues = {
  header: '',
  paragraph: '',
  imageURL: null,
}

const CreateNews = () => {
  const [t] = useTranslation()

  const router = useRouter()

  const { isCreateNewsSubmitSuccess } = useAppSelector(newsSelector.news)

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(createNewsValidationSchema),
    mode: 'onChange',
  })

  const { reset, handleSubmit } = methods

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
      <div className="mt-5">
        <Button
          variant="text"
          LeftIcon={LeftIcon}
          onClick={() => router.back()}
        >
          {t(Translation.GO_BACK)}
        </Button>
      </div>
      <div className="mt-10 flex flex-row-reverse justify-between">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full"
          >
            <SharedCRU />
          </form>
        </FormProvider>
      </div>
    </Container>
  )
}

export default CreateNews
