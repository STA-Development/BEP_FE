import { object, string } from 'yup'

export const helpValidationSchema = object({
  headline: string().required('Headline is required'),
  problem: string().min(5).required('Problem is required'),
})
