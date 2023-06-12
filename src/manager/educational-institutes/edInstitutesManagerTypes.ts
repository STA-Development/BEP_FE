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
  data: string[]
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
  imageURLs: ICreateEducationalInstituteImage[] | string[] | null
  province: ICreateEducationalInstituteAutocompleteField
  rector: string
  startTime: string
  studentQuantity: string | number
  subtitle: string
  type: ICreateEducationalInstituteAutocompleteField
}

export interface ICreateEducationalInstituteAutocompleteField {
  id: number
  name: string
}

export interface ICreateEducationalInstituteImage {
  [key: number]: File
}

export interface IChangeEducationalInstituteFormDataProps {
  payload: ICreateEducationalInstituteFormDataProps
  uuid: string
}
