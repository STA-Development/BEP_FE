import { object, ref, string } from 'yup'

export const registerValidationSchema = object({
  name: string().required('Name is required'),
  email: string().email().required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum'),
  passwordConfirmation: string().oneOf([ref('password')], 'Passwords must match'),
})
