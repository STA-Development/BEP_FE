import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { object, string } from 'yup'

export const loginValidationSchema = object({
  email: string()
    .email()
    .required(i18next.t(Translation.PAGE_LOGIN_VALIDATION_EMAIL) as string),
  password: string().required(i18next.t(Translation.PAGE_LOGIN_VALIDATION_PASSWORD) as string),
})
