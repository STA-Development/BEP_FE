import { object, string } from 'yup'

export const helpValidationSchema = object({
  headline: string().required(),
  problem: string().min(5).required(),
})
