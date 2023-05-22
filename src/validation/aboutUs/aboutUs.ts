import { mixed, object, string } from 'yup'

export const createAboutUsValidationSchema = object().shape({
  header: string().required('header is requier'),
  paragraph: string().required('paragraph is requier'),
  imageDescription: string().required('paragraph is requier'),
  imageURL: mixed()
    .test('required', 'You need to provide a file', (file) => {
      if (file) {
        return true
      }

      return false
    })
    .required('Image is required'),
})
