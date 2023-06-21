export interface IEdInstitutesResponse {
  uuid: string
  name: string
  address: string
  phone: string
  email: string
  subtitle: string
  imageURL: string
  province: string
  type: string
}
export interface IIndividualEducationalInstituteResponse {
  uuid: string
  name: string
  subtitle: string
  imageURLs: string[]
  description: string
  address: string
  phone: string
  email: string
  province: string
  type: string
  rector: string
  lecturerQuantity: string
  studentQuantity: string
  startTime: string
  endTime: string
}

export interface IEducationalInstitutesParams {
  page: number
  filters?: IFilters[]
}

export interface IFilters {
  key?: string
  value?: string
}

export interface IProvinces {
  provinces: string[]
}

export interface EducationalInstitutesPageParam {
  page: number
}

export interface ICreateEducationalInstituteFormDataProps {
  address: string
  description: string
  email: string
  endTime: string
  lecturerQuantity: string
  name: string
  phone: string
  province: string
  rector: string
  startTime: string
  studentQuantity: string
  subtitle: string
  type: string
  [keys: number]: File
}

export interface ICreateEducationalInstituteProps {
  address: string
  description: string
  email: string
  endTime: string
  lecturerQuantity: string | number
  name: string
  phone: string | number
  imageURLs: File[]
  province: ICreateEducationalInstituteAutocompleteField | null
  rector: string
  startTime: string
  studentQuantity: string | number
  subtitle: string
  type: ICreateEducationalInstituteAutocompleteField | null
}

export interface ICreateEducationalInstituteAutocompleteField {
  id: number | string
  name: string
}

export interface IChangeEducationalInstituteFormDataProps {
  payload: ICreateEducationalInstituteFormDataProps
  uuid: string
}
