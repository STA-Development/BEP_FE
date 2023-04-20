import { object, string } from 'yup'

export const contactUsValidationSchema = object({
  fullName: string().required('Full name is required'),
  email: string().email().required('Email is required'),
  phone: string().required('Phone Number is required'),
  message: string().required('Message is required'),
})
