import { phoneRegex } from '@constants/index'
import { endTimeRegex, startTimeRegex } from '@constants/instituts'
import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { array, number, object, string } from 'yup'

export const educationalInstitutionValidationSchema = object().shape({
  address: string().required(
    i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_ADDRESS) as string
  ),
  description: string().required(
    i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_DESCRIPTION) as string
  ),
  name: string().required(i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_NAME) as string),
  rector: string().required(
    i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_RECTOR) as string
  ),
  studentQuantity: number()
    .min(
      0,
      i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_STUDENT_QUANTITY_QUANTITY) as string
    )
    .required(i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_STUDENT_QUANTITY) as string),
  lecturerQuantity: number()
    .min(
      0,
      i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_LECTURER_QUANTITY_QUANTITY) as string
    )
    .required(i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_LECTURER_QUANTITY) as string),
  subtitle: string().required(
    i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_SUBTITLE) as string
  ),
  phone: string()
    .matches(
      phoneRegex,
      i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_PHONE_REGEX) as string
    )
    .required('subtitle is required'),
  email: string()
    .email()
    .required(i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_EMAIL) as string),
  province: object({
    name: string().required(),
    id: number().required(),
  }),
  type: object({
    name: string().required(),
    id: number().required(),
  }),
  startTime: string()
    .required(i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_START_TIME) as string)
    .matches(
      startTimeRegex,
      i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_START_TIME_MATCHES) as string
    ),
  endTime: string()
    .required(i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_END_TIME) as string)
    .matches(
      endTimeRegex,
      i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_END_TIME_MATCHES) as string
    )
    .test(
      'is-greater',
      i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_END_TIME_TEST) as string,
      function (endTime) {
        const { startTime } = this.parent

        if (!startTime || !endTime) {
          return true
        }

        const startTimeObj = new Date(`1970-01-01T${startTime}`)
        const endTimeObj = new Date(`1970-01-01T${endTime}`)

        return endTimeObj > startTimeObj
      }
    ),
  imageURLs: array().test(
    'required',
    i18next.t(Translation.PAGE_EDUCATIONAL_FORM_VALIDATION_IMAGE) as string,
    (value) => {
      if (!value || value.length === 0) {
        return false
      }

      value.forEach((item) => {
        if (!(value[item] instanceof File)) {
          return false
        }

        const acceptedFormats = ['jpg', 'jpeg', 'png', 'gif']
        const fileExtension = value[item].name.split('.').pop().toLowerCase()

        if (!acceptedFormats.includes(fileExtension)) {
          return false
        }

        return true
      })

      return true
    }
  ),
})
