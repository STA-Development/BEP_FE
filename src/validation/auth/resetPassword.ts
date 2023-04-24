import { number, object, string } from 'yup'

export const resetPasswordValidationSchema = object({
  email: string().email().required('Email is required'),
  otp: number().required('Code is required'),
  password: string().required('Password is required'),
  confirm_password: string().required('Password is required'),
})
