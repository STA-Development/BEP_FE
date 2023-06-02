import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { object, string } from 'yup'

export const contactUsValidationSchema = object({
  fullName: string()
    .matches(
      /^[aA-zZ\s]+$/,
      i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_NAME_MATCHES) as string
    )
    .required(i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_NAME) as string),
  email: string()
    .email()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_EMAIL_MATCHES) as string
    )
    .required(i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_EMAIL) as string),
  phone: string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_PHONE_MATCHES) as string
    )
    .required(i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_PHONE) as string),
  message: string().required(i18next.t(Translation.PAGE_CONTACT_US_VALIDATION_MESSAGE) as string),
})
