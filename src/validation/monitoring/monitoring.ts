import { FormValues } from '@components/Monitoring/Form/helper'
import { phoneRegExp } from '@constants/common'
import { array, boolean, number, object, string } from 'yup'

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
  object({
    hasFiredWorkers: boolean().required(),
    firingReason: array().when('hasFiredWorkers', {
      is: (value: boolean) => value,
      then: () =>
        array(
          object({
            value: string().required(),
            count: string().matches(/^\d+$/, 'Count must be number').required(),
          })
        ),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    hasNewEmployees: boolean().required(),
    newEmployeePosition: array().when('hasNewEmployees', {
      is: (value: boolean) => value,
      then: () =>
        array(
          object({
            value: string().required(),
            count: string().matches(/^\d+$/, 'Count must be number').required(),
          })
        ),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    primaryReason: array().when('hasNewEmployees', {
      is: (value: boolean) => value,
      then: () =>
        array(
          object({
            value: string().required(),
            count: string().matches(/^\d+$/, 'Count must be number').required(),
          })
        ),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    hadDifficultiesWithVacancies: boolean().when('hasNewEmployees', {
      is: (value: boolean) => value,
      then: () => boolean().required(),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    difficultVacancies: array().when(['hasNewEmployees', 'hadDifficultiesWithVacancies'], {
      is: (hasNewEmployees: boolean, hadDifficultiesWithVacancies: boolean) =>
        hasNewEmployees && hadDifficultiesWithVacancies,
      then: () => array().of(string().required()),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    employmentMeans: array().when(['hasNewEmployees', 'hadDifficultiesWithVacancies'], {
      is: (hasNewEmployees: boolean, hadDifficultiesWithVacancies: boolean) =>
        hasNewEmployees && hadDifficultiesWithVacancies,
      then: () =>
        array()
          .of(
            object().shape({
              fieldName: string().required(),
              value: boolean().required(),
            })
          )
          .test('has-true-value', 'At least one item should have value true', (value) =>
            value?.some((obj) => obj.value)
          ),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    workChallengeAffects: array().when(['hasNewEmployees', 'hadDifficultiesWithVacancies'], {
      is: (hasNewEmployees: string, hadDifficultiesWithVacancies: string) =>
        hasNewEmployees && hadDifficultiesWithVacancies,
      then: () =>
        array()
          .of(
            object().shape({
              fieldName: string().required(),
              value: boolean().required(),
            })
          )
          .test('has-true-value', 'At least one item should have value true', (value) =>
            value?.some((obj) => obj.value)
          ),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    trainingPeriod: array()
      .of(
        object().shape({
          fieldName: string(),
          value: boolean().required(),
        })
      )
      .test('has-true-value', 'At least one item should have value true', (value) =>
        value?.some((obj) => obj.value)
      ),
  }),
  object({
    haveVacancies: boolean().required(),
    vacancy: array().when('haveVacancies', {
      is: (value: boolean) => value,
      then: () =>
        array(
          object({
            value: string().required(),
            count: string().matches(/^\d+$/, 'Count must be number').required(),
          })
        ),
      otherwise: (schema) => schema.notRequired().nullable(),
    }),
    vacancyCountByField: array(
      object({
        value: string().required(),
        count: string().matches(/^\d+$/, 'Count must be number').required(),
      })
    ),
    vacancyData: array().of(
      object().shape({
        name: string().required(),
        education: string().required(),
        count: string().required(),
        startDate: string().required(),
      })
    ),
  }),
  object({
    businessPerspective: array()
      .of(
        object().shape({
          fieldName: string(),
          value: boolean().required(),
        })
      )
      .test('has-true-value', 'At least one item should have value true', (value) =>
        value?.some((obj) => obj.value)
      ),
    positionCuts: array(
      object({
        value: string().required(),
        count: string().matches(/^\d+$/, 'Count must be number').required(),
      })
    ),
    additionalPositions: array(
      object({
        value: string().required(),
        count: string().matches(/^\d+$/, 'Count must be number').required(),
      })
    ),
    planedPositions: array(
      object({
        value: string().required(),
        count: string().matches(/^\d+$/, 'Count must be number').required(),
      })
    ),
    positionNecessityReason: array()
      .of(
        object().shape({
          fieldName: string(),
          value: boolean().required(),
        })
      )
      .test('has-true-value', 'At least one item should have value true', (value) =>
        value?.some((obj) => obj.value)
      ),
  }),
  object({
    businessPerspective: array()
      .of(
        object().shape({
          fieldName: string(),
          value: boolean().required(),
        })
      )
      .test('has-true-value', 'At least one item should have value true', (value) =>
        value?.some((obj) => obj.value)
      ),
    positionCuts: array(
      object({
        value: string().required(),
        count: string().matches(/^\d+$/, 'Count must be number').required(),
      })
    ),
    additionalPositions: array(
      object({
        value: string().required(),
        count: string().matches(/^\d+$/, 'Count must be number').required(),
      })
    ),
    planedPositions: array(
      object({
        value: string().required(),
        count: string().matches(/^\d+$/, 'Count must be number').required(),
      })
    ),
    positionNecessityReason: array()
      .of(
        object().shape({
          fieldName: string(),
          value: boolean().required(),
        })
      )
      .test('has-true-value', 'At least one item should have value true', (value) =>
        value?.some((obj) => obj.value)
      ),
  }),
]
