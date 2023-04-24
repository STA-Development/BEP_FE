import { object, string } from 'yup'

export const contactUsValidationSchema = object({
  fullName: string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .required('Full name is required'),
  email: string()
    .email()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid name address')
    .required('Email is required'),
  phone: string().required('Phone Number is required'),
  message: string().required('Message is required'),
})
