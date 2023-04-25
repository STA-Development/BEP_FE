import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { number, object, ref, string } from 'yup'

export const resetPasswordValidationSchema = object({
  email: string()
    .email()
    .required(i18next.t(Translation.PAGE_REGISTER_VALIDATION_NAME) as string),
  otp: number()
    .min(6)
    .required(i18next.t(Translation.PAGE_RESET_PASSWORD_VALIDATION_CODE) as string),
  password: string().required(
    i18next.t(Translation.PAGE_RESET_PASSWORD_VALIDATION_PASSWORD) as string
  ),
  confirm_password: string()
    .oneOf(
      [ref('password')],
      i18next.t(Translation.PAGE_RESET_PASSWORD_VALIDATION_PASSWORD_CONFIRMATION) as string
    )
    .required(i18next.t(Translation.PAGE_RESET_PASSWORD_VALIDATION_PASSWORD) as string),
})
