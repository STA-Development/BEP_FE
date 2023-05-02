import { object, string } from 'yup'

export const jobSeekerValidationSchema = object({
  area: string(),
  type: string(),
  educationLevel: string(),
  experience: string(),
  schedule: string(),
  workplace: string(),
  expectedSalary: string(),
})
