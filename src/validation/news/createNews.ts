import { Translation } from '@constants/translations'
import i18next from 'i18next'
import { mixed, object, string } from 'yup'

export const createNewsValidationSchema = object().shape({
  header: string().required(i18next.t(Translation.CREATE_NEWS_HEADER) as string),
  paragraph: string().required(i18next.t(Translation.CREATE_NEWS_PARAGRAPH) as string),
  imageURL: mixed()
    .test('required', 'You need to provide a file', (file) => {
      if (file) {
        return true
      }

      return false
    })
    .required('Image is required'),
})
