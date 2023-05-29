import { mixed, object, string } from 'yup'

export const createAboutUsValidationSchema = object().shape({
  header: string().required('header is requier'),
  paragraph: string().required('paragraph is requier'),
  imageDescription: string().required('paragraph is requier'),
  imageURL: mixed<File>()
    .required('Image is required')
    .test('fileType', 'Only image files are allowed', (file: File) => {
      if (file && !['image/jpeg', 'image/png', 'image/jpg']) {
        return false
      }

      return file && ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)
    }),
})
