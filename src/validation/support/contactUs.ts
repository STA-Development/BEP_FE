import { fullNameRegex, phoneRegex } from '@constants/contactUs'
import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { object, string } from 'yup'

export const contactUsValidationSchema = object({
  fullName: string()
    .matches(
      fullNameRegex,
      i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_NAME_MATCHES) as string
    )
    .required(i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_NAME) as string),
  email: string()
    .email()
    .required(i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_EMAIL) as string),
  phone: string()
    .matches(phoneRegex, i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_PHONE_MATCHES) as string)
    .required(i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_PHONE) as string),
  message: string().required(i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_MESSAGE) as string),
})
