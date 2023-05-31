import { FormValues } from '@components/Monitoring/Form/helper'
import { phoneRegExp } from '@constants/common'
import { object, string } from 'yup'

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
]
