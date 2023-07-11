import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { mixed, object, string } from 'yup'

export const createAboutUsValidationSchema = object().shape({
  header: string().required(i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_HEADER) as string),
  paragraph: string().required(i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_PARAGRAPH) as string),
  imageDescription: string().required(
    i18next.t(Translation.PAGE_ABOUT_US_VALIDATION_IMAGE_DESCRIPTION) as string
  ),
  imageURL: mixed().test(
    'isFile',
    'Invalid file',
    (value) =>
      // Check if value is a File object
      value instanceof File
  ),
})
