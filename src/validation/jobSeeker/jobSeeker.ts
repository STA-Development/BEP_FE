import { number, object, string } from 'yup'

export const jobSeekerValidationSchema = object({
  area: object({
    name: string().required(),
    id: number().required(),
  }),
  type: object({
    name: string().required(),
    id: number().required(),
  }),
  educationLevel: object({
    name: string().required(),
    id: number().required(),
  }),
  experience: object({
    name: string().required(),
    id: number().required(),
  }),
  schedule: object({
    name: string().required(),
    id: number().required(),
  }),
  workplace: object({
    name: string().required(),
    id: number().required(),
  }),
  expectedSalary: object({
    name: string().required(),
    id: number().required(),
  }),
})
