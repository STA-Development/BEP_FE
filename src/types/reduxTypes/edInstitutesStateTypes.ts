import {
  IEdInstitutesResponse,
  IFilters,
  IIndividualEducationalInstituteResponse,
} from '@axios/educational-institutes/edInstitutesManagerTypes'

export interface IEdInstitutesProps {
  edInstitute: IEdInstitutes
  provinces: string[]
  filters: { page: number; filters: IFilters[] }
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
