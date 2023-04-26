import { object, string } from 'yup'

export const contactUsValidationSchema = object({
  fullName: string()
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field')
    .required('Full name is required'),
  email: string()
    .email()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email address')
    .required('Email is required'),
  phone: string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Invalid phone number'
    )
    .required('Phone Number is required'),
  message: string().required('Message is required'),
})
