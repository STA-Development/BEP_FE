import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { object, ref, string } from 'yup'

export const registerValidationSchema = object({
  name: string().required(i18next.t(Translation.PAGE_REGISTER_VALIDATION_NAME) as string),
  email: string()
    .email()
    .required(i18next.t(Translation.PAGE_REGISTER_VALIDATION_EMAIL) as string),
  password: string()
    .required(i18next.t(Translation.PAGE_REGISTER_VALIDATION_PASSWORD) as string)
    .min(8, i18next.t(Translation.PAGE_REGISTER_VALIDATION_PASSWORD_MIN) as string),
  passwordConfirmation: string().oneOf(
    [ref('password')],
    i18next.t(Translation.PAGE_REGISTER_VALIDATION_PASSWORD_CONFIRMATION) as string
  ),
})
