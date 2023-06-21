import { Translation } from '@constants/translations'
import i18next from 'i18next'

export const generateErrorMessage = (fieldName: string) => {
  const requiredFieldMessage = i18next.t(Translation.PAGE_GLOBAL_IS_REQUIRED)

  return `${fieldName} ${requiredFieldMessage}`
}
