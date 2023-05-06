import { Item } from '@uiComponents/Select'

export const EducationalInstitutionTypes = ['University', 'College', 'Workshop']
export const filterDefaultValues = {
  type: { name: '', id: 1 },
  province: { name: '', id: 1 },
}
export interface IFilterValues {
  type: Item
  province: Item
}
