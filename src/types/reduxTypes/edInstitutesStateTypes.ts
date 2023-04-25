import { IEdInstitutesResponse } from '@axios/educational-institutes/edInstitutesManagerTypes'

export interface IEdInstitutesProps {
  edInstitute: IEdInstitutes
  isIndividualEduInstitutesLoading: boolean
  individualEduInstitute: IEdInstitutesResponse | null
}

export interface IEdInstitutes {
  edInstitutesList: IEdInstitutesResponse[]
  pageSize: number
  totalItems: number
}
