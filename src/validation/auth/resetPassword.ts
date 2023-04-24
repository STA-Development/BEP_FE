import { number, object, ref, string } from 'yup'

export const resetPasswordValidationSchema = object({
  email: string().email().required('Email is required'),
  otp: number().min(6).required('Code is required'),
  password: string().required('Password is required'),
  confirm_password: string()
    .oneOf([ref('password')], 'Passwords must match')
    .required('Password is required'),
})
