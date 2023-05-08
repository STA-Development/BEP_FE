import { number, object, string } from 'yup'

export const userInfoValidationSchema = object({
  email: string().email(),
  password: string(),
  name: string(),
  phone: number(),
})
