import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ICreateEventParams } from '@allTypes/reduxTypes/eventsStateTypes'
import { SharedCRU } from '@components/Admin/Common'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { eventsMiddleware, eventsSelector } from '@redux/slices/events'
import { Button } from '@uiComponents/Button'
import { createEventValidationSchema } from '@validation/events/createEvents'
import { useRouter } from 'next/router'

const defaultValues = {
  header: '',
  paragraph: '',
  imageURL: null,
}

const CreateEvent = () => {
  const [t] = useTranslation()

  const router = useRouter()

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(createEventValidationSchema),
    mode: 'onChange',
  })

  const { isCreateEventsSubmitSuccess } = useAppSelector(eventsSelector.eventsData)
  const { reset, handleSubmit } = methods

  const onSubmit = (data: ICreateEventParams) => {
    dispatch(eventsMiddleware.createEvent(data))
  }

  useEffect(() => {
    if (isCreateEventsSubmitSuccess) {
      reset(defaultValues)
      router.push('/events')
      dispatch(eventsMiddleware.resetCreateEventsSubmitSuccess())
    }
  }, [isCreateEventsSubmitSuccess, reset, router])

  return (
    <Container className="mb-30 pb-20">
      <PageHeader
        title={t(Translation.PAGE_EVENTS_MAIN_TITLE)}
        description={t(Translation.PAGE_EVENTS_MAIN_DESCRIPTION) as string}
        paths={['Home', 'Events']}
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

export default CreateEvent
