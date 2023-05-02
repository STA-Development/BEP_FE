import {
  IEdInstitutesResponse,
  IIndividualEducationalInstituteResponse,
} from '@axios/educational-institutes/edInstitutesManagerTypes'

export interface IEdInstitutesProps {
  edInstitute: IEdInstitutes
  isIndividualEduInstitutesLoading: boolean
  individualEduInstitute: IIndividualEducationalInstituteResponse | null
}

export interface IEdInstitutes {
  error?: string | null
  edInstitutesList: IEdInstitutesResponse[]
  isEducationalInstitutesListLoading?: boolean
  pageSize: number
  totalItems: number
}
