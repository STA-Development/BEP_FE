import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IEventsResponse } from '@allTypes/reduxTypes/eventsStateTypes'
import { IChangeNewsFormProps, IFormData } from '@allTypes/reduxTypes/newsStateTypes'
import { SharedCRU } from '@components/Admin/Common'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { eventsMiddleware, eventsSelector } from '@redux/slices/events'
import { newsMiddleware } from '@redux/slices/news'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'
import { useRouter } from 'next/router'

interface MyObject {
  [key: string]: string | File
}

const ChangeEvent = () => {
  const [t] = useTranslation()

  const router = useRouter()

  const eventId = router.query.path

  const singleEvent = useAppSelector(eventsSelector.singleEvent)
  const { isChangeEventsSubmitSuccess } = useAppSelector(eventsSelector.eventsData)

  const defaultValues = useMemo(
    () => ({
      header: singleEvent?.header ?? '',
      paragraph: singleEvent?.paragraph ?? '',
      imageURL: singleEvent?.imageURL ?? '',
    }),
    [singleEvent]
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
        singleEvent &&
        typeof data[key as keyof IFormData] &&
        singleEvent[key as keyof IEventsResponse] !== data[key as keyof IFormData]
      ) {
        payload[key as keyof IFormData] = data[key as keyof IFormData]
      }
    })

    const formData = {
      uuid: singleEvent?.uuid,
      payload,
    }

    dispatch(newsMiddleware.changeNews(formData as IChangeNewsFormProps))
  }

  useEffect(() => {
    if (eventId) {
      dispatch(eventsMiddleware.getSingleEvent(eventId as string))
    }
  }, [eventId])

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, reset])

  useEffect(() => {
    if (isChangeEventsSubmitSuccess) {
      reset(defaultValues)
      dispatch(eventsMiddleware.resetChangeEventSubmitSuccess())
      router.push('/events')
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangeEventsSubmitSuccess, reset, router])

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
      {!singleEvent ? (
        <Loading />
      ) : (
        <div className="mt-10 flex flex-row-reverse justify-between">
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >
              <SharedCRU individualNews={singleEvent} />
            </form>
          </FormProvider>
        </div>
      )}
    </Container>
  )
}

export default ChangeEvent
