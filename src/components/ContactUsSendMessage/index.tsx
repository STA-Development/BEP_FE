import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IContactUsProps } from '@allTypes/reduxTypes/supportStateTypes'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { supportMiddleware, supportSelector } from '@redux/slices/support'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'
import { contactUsValidationSchema } from '@validation/support/contactUs'

const defaultValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
}

const ContactUsSendMessage = () => {
  const [t] = useTranslation()
  const { contactUsStatus } = useAppSelector(supportSelector.support)

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(contactUsValidationSchema),
  })

  const onSubmit = (data: IContactUsProps) => {
    dispatch(
      supportMiddleware.fetchContactUsMessage({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone.toString(),
        message: data.message,
      })
    )
  }

  useEffect(() => {
    if (contactUsStatus === 200) {
      reset({ ...defaultValues })
    }
  }, [contactUsStatus, reset])

  return (
    <div className="xl:pr-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 flex flex-col">
          <Controller
            control={control}
            name="fullName"
            defaultValue=""
            render={({ field, fieldState }) => (
              <Input
                id="name"
                label={`${t(Translation.CONTACT_US_FULL_NAME)}`}
                {...field}
                error={fieldState.error ? t(Translation.CONTACT_US_FULL_NAME_REQUIRED) : null}
              />
            )}
          />
        </div>
        <div className="columns-1 gap-5 xl:columns-2">
          <div className="mb-5 flex flex-col">
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field, fieldState }) => (
                <Input
                  type="email"
                  id="email"
                  label={`${t(Translation.CONTACT_US_MAIL)}`}
                  {...field}
                  error={fieldState.error ? t(Translation.CONTACT_US_MAIL_REQUIRED) : null}
                />
              )}
            />
          </div>
          <div className="mb-5 flex flex-col">
            <Controller
              control={control}
              name="phone"
              defaultValue=""
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  id="telephone"
                  label={`${t(Translation.CONTACT_US_PHONE)}`}
                  type="number"
                  {...field}
                  error={fieldState.error ? t(Translation.CONTACT_US_PHONE_REQUIRED) : null}
                />
              )}
            />
          </div>
        </div>
        <div className="mb-10 flex flex-col">
          <Controller
            control={control}
            name="message"
            defaultValue=""
            render={({ field, fieldState }) => (
              <Input
                label={`${t(Translation.CONTACT_US_MESSAGE)}`}
                id="message"
                {...field}
                rows={7}
                error={fieldState.error ? t(Translation.CONTACT_US_MESSAGE_REQUIRED) : null}
              />
            )}
          />
        </div>
        <Button
          type="submit"
          size="fl"
        >
          {t(Translation.HELP_BUTTON)}
        </Button>
      </form>
    </div>
  )
}

export default ContactUsSendMessage
