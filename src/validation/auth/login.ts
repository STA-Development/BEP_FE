import { number, object, string } from 'yup'

export const loginValidationSchema = object({
  email: string().email(),
  password: string(),
  name: string(),
  phone: number(),
})
