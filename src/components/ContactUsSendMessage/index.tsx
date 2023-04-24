import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IContactUsProps } from '@allTypes/reduxTypes/supportStateTypes'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { supportMiddleware, supportSelector } from '@redux/slices/support'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'
import { contactUsValidationSchema } from '@validation/support/contactUs'

const defaultValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
}

const ContactUsSendMessage = () => {
  const [t] = useTranslation()

  const isContactUsDataSubmittedSuccess = useAppSelector(
    supportSelector.isContactUsDataSubmittedSuccess
  )

  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(contactUsValidationSchema),
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: IContactUsProps) => {
    dispatch(
      supportMiddleware.sendContactUsData({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone.toString(),
        message: data.message,
      })
    )
  }

  useEffect(() => {
    if (isContactUsDataSubmittedSuccess) {
      reset({ ...defaultValues })
    }
  }, [isContactUsDataSubmittedSuccess, reset])

  return (
    <div className="xl:pr-20">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 flex flex-col">
            <TextField
              id="name"
              fieldName="fullName"
              label={`${t(Translation.CONTACT_US_FULL_NAME)}`}
            />
          </div>
          <div className="columns-1 gap-5 xl:columns-2">
            <div className="mb-5 flex flex-col">
              <TextField
                fieldName="email"
                type="email"
                id="email"
                label={`${t(Translation.CONTACT_US_MAIL)}`}
              />
            </div>
            <div className="mb-5 flex flex-col">
              <TextField
                fieldName="phone"
                type="number"
                id="telephone"
                label={`${t(Translation.CONTACT_US_PHONE)}`}
              />
            </div>
          </div>
          <div className="mb-10 flex flex-col">
            <TextField
              fieldName="message"
              id="message"
              label={`${t(Translation.CONTACT_US_MESSAGE)}`}
              rows={7}
            />
          </div>
          <Button
            type="submit"
            size="fl"
          >
            {t(Translation.CONTACT_US_SUBMIT_BUTTON)}
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}

export default ContactUsSendMessage
