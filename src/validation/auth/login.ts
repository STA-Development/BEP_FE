import { object, string } from 'yup'

export const loginValidationSchema = object({
  email: string().email().required('Email is required'),
  password: string().required('Password is required'),
})
