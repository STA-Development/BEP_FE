import { phoneRegex } from '@constants/contactUs'
import { number, object, string } from 'yup'

export const changeEducationalInstitutionValidationSchema = object().shape({
  address: string().required('Header is required'),
  description: string().required('description is required'),
  name: string().required('Name is required'),
  rector: string().required('Rector is required'),
  studentQuantity: number()
    .min(0, 'Quantity must be greater than or equal to 0')
    .required('Quantity is required'),
  lecturerQuantity: number()
    .min(0, 'Quantity must be greater than or equal to 0')
    .required('Quantity is required'),
  subtitle: string().required('subtitle is required'),
  phone: string().matches(phoneRegex, 'Invalid phone number').required('subtitle is required'),
  email: string().email().required('Email is required'),
  province: object({
    name: string().required(),
    id: number().required(),
  }),
  type: object({
    name: string().required(),
    id: number().required(),
  }),
  startTime: string()
    .required('Start time is required')
    .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid start time format'),
  endTime: string()
    .required('End time is required')
    .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid end time format')
    .test('is-greater', 'End time must be greater than start time', function (endTime) {
      const { startTime } = this.parent

      if (!startTime || !endTime) {
        return true
      }

      const startTimeObj = new Date(`1970-01-01T${startTime}`)
      const endTimeObj = new Date(`1970-01-01T${endTime}`)

      return endTimeObj > startTimeObj
    }),
})
