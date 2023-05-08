import { boolean, object, string } from 'yup'

// export const jobSeekerValidationSchema = object({
//   active: boolean(),
//   name: object().shape({
//     value: string().required.when('active', {
//       is: true,
//       then: string()
//         .test('empty', 'Required', (name) => name?.length !== 0)
//         .required(),
//       otherwise: string().notRequired().nullable(),
//     }),
//   }),
//   email: object({
//     value: string().required
//       .email()
//       .when('active', {
//         is: true,
//         then: string()
//           .test('empty', 'Required', (name) => name?.length !== 0)
//           .required(),
//         otherwise: string().notRequired().nullable(),
//       }),
//     active: boolean(),
//   }),
//   phone: object({
//     value: string().required.when('active', {
//       is: true,
//       then: string()
//         .test('empty', 'Required', (name) => name?.length !== 0)
//         .required(),
//       otherwise: string().notRequired().nullable(),
//     }),
//     active: boolean(),
//   }),
//   password: object({
//     value: string().required
//       .min(8)
//       .when('active', {
//         is: true,
//         then: string()
//           .test('empty', 'Required', (name) => name?.length !== 0)
//           .required(),
//         otherwise: string().notRequired().nullable(),
//       }),
//     active: boolean(),
//   }),
// })

export const jobSeekerValidationSchema = object({
  active: boolean(),
  name: object().shape({
    value: string().required(),
  }),
  email: object({
    value: string().email().required(),
    active: boolean(),
  }),
  phone: object({
    value: string().required(),
    active: boolean(),
  }),
  password: object({
    value: string().required(),
    active: boolean(),
  }),
})
