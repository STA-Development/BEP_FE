import { ISelectItem } from '@uiComponents/Select'

export const EducationalInstitutionTypes = ['University', 'College', 'Workshop']
export const filterDefaultValues = {
  type: { name: '', id: 1 },
  province: { name: '', id: 1 },
}

export const monitoringSystemFilterDefaultValues = {
  year: { name: null, id: 1 },
  sexAtBirth: { name: null, id: 1 },
  educationLevel: { name: null, id: 1 },
}

export interface IFilterValues {
  type: ISelectItem
  province: ISelectItem
}

export const Years = ['2019', '2020', '2021', '2022', '2023']

export const EducationLevel = ['Higher education', 'Vocational education']

export const Gender = ['Male', 'Female']

export interface IMonitoringSystemFilterProps {
  id: number
  name: string[] | null
}

export interface IParamsProps {
  key: string
  values: string[] | null
}

export interface IMonitoringSystemFilterValues {
  year: IMonitoringSystemFilterProps
  gender: IMonitoringSystemFilterProps
  educationLevel: IMonitoringSystemFilterProps
}
