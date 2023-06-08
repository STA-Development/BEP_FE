import { FormValues } from '@components/Monitoring/Form/helper'
import { phoneRegExp } from '@constants/common'
import { array, number, object, string } from 'yup'

export const monitoringValidationSchema = [
  object({
    residence: string().required(),
    companyName: string().required(),
    organizationType: object({
      id: string().required(),
      name: string().required(),
    }),
    organizationTypeOther: string().when('organizationType', (organizationType, field) =>
      organizationType[0].id === FormValues.OTHER
        ? field.required()
        : field.notRequired().nullable()
    ),
    activityPeriod: object({
      id: string().required(),
      name: string().required(),
    }),
    activityAddress: string().required(),
    respondentName: string().required(),
    position: string().required(),
    email: string().email().required(),
    phone: string().required().matches(phoneRegExp, 'Phone number is not valid'),
  }),
  object({
    secondaryEducation: array(
      object({
        female: object({
          count: number().typeError('Please Enter Number').required('This Field Is Required'),
        }),
        male: object({
          count: number().typeError('Please Enter Number').required('This Field Is Required'),
        }),
      })
    ),
    vocationalEducation: array(
      object({
        female: object({
          count: number().typeError('Please Enter Number').required('This Field Is Required'),
        }),
        male: object({
          count: number().typeError('Please Enter Number').required('This Field Is Required'),
        }),
      })
    ),
    higherEducation: array(
      object({
        female: object({
          count: number().typeError('Please Enter Number').required('This Field Is Required'),
        }),
        male: object({
          count: number().typeError('Please Enter Number').required('This Field Is Required'),
        }),
      })
    ),
    hasStudentsOrPractitioner: string().required(),
    // demandingProfessions: array(
    //   object({
    //     value: string().when('hasStudentsOrPractitioner', (active, field) => {
    //       console.log(active)
    //
    //       return active[0] === 'true' ? field.required() : field.notRequired().nullable()
    //     }),
    //     count: number().when('hasStudentsOrPractitioner', (active, field) =>
    //       active[0] === 'true' ? field.required() : field.notRequired().nullable()
    //     ),
    //   })
    // ),
    // demandingProfessions: array().when('hasStudentsOrPractitioner', (active, field) => {
    //   console.log(active)
    //   field.when('hasStudentsOrPractitioner', (active1, newField) => {
    //     console.log(active1, newField, '!!!!!!!')
    //
    //     return object({
    //       value: string().required(),
    //       count: string().required(),
    //     })
    //   })
    //
    //   // if (active[0] === 'true') {
    //   //   return object({
    //   //     value: string(),
    //   //     count: string(),
    //   //   })
    //   // }
    //
    //   return object({
    //     value: string().required(),
    //     count: string().required(),
    //   })
    // }),
    demandingProfessions: array().when('hasStudentsOrPractitioner', {
      is: 'true',
      then: () =>
        array(
          object({
            value: string().required(),
            count: string().matches(/^\d+$/, 'Count must be number').required(),
          })
        ),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    targetProfession: array().when('hasStudentsOrPractitioner', {
      is: 'false',
      then: () =>
        array(
          object({
            value: string().required(),
            count: string().matches(/^\d+$/, 'Count must be number').required(),
          })
        ),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
  }),
]
