import { phoneRegExp } from '@constants/common'
import { boolean, number, object, string } from 'yup'

export const organizationValidationSchema = object({
  active: boolean(),
  name: object({
    value: string().when('active', (active, field) =>
      active[0] ? field.required() : field.notRequired().nullable()
    ),
  }),
  email: object({
    value: string().when('active', (active, field) =>
      active[0] ? field.email().required() : field.notRequired().nullable()
    ),
    active: boolean(),
  }),
  phone: object({
    value: string().when('active', (active, field) =>
      active[0]
        ? field.required().matches(phoneRegExp, 'Phone number is not valid')
        : field.notRequired().nullable()
    ),
    active: boolean(),
  }),
  password: object({
    value: string().when('active', (active, field) =>
      active[0] ? field.required() : field.notRequired().nullable()
    ),
    active: boolean(),
  }),
  employeeQuantity: object({
    value: number().when('active', (active, field) =>
      active[0] ? field.required() : field.notRequired()
    ),
    active: boolean(),
  }),
  organizationType: object({
    value: object({
      id: string().required(),
      name: string().required(),
    }).when('active', (active, field) =>
      active[0] ? field.required() : field.notRequired().nullable()
    ),
    active: boolean(),
  }),
})
