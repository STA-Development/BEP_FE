import { IEdInstitutes } from '@allTypes/reduxTypes/edInstitutesStateTypes'

export interface EducationalInstitutesParams {
  educationalInstitutes: IEdInstitutes
  page: number
}
export interface EducationalInstitutesPageParam {
  page: number
}
export interface IEducationalInstitutesResponse {
  uuid: string
  header: string
  paragraph: string
  imageURL: string
  postedAt: string
}
