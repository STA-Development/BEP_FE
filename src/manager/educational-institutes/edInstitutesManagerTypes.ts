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
  key: string
  value: string
}

export interface IProvinces {
  data: string[]
}

export interface EducationalInstitutesPageParam {
  page: number
}
