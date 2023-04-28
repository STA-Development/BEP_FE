import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { number, object, ref, string } from 'yup'

export const resetPasswordValidationSchema = [
  object({
    email: string()
      .email()
      .required(i18next.t(Translation.PAGE_RESET_PASSWORD_VALIDATION_EMAIL) as string),
  }),
  object({
    otp: number()
      .min(6)
      .required(i18next.t(Translation.PAGE_RESET_PASSWORD_VALIDATION_CODE) as string),
  }),
  object({
    password: string().required(
      i18next.t(Translation.PAGE_CONFIRM_PASSWORD_VALIDATION_PASSWORD) as string
    ),
    confirm_password: string()
      .oneOf(
        [ref('password')],
        i18next.t(Translation.PAGE_CONFIRM_PASSWORD_VALIDATION_PASSWORD_CONFIRMATION) as string
      )
      .required(
        i18next.t(
          Translation.PAGE_CONFIRM_PASSWORD_VALIDATION_PASSWORD_CONFIRMATION_REQUIRED
        ) as string
      ),
  }),
]
