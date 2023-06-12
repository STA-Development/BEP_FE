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
  iCreateIndividualInstitutesSuccess: boolean
  iChangeIndividualInstitutesSuccess: boolean
}

export interface IEdInstitutes {
  edInstitutesList: IEdInstitutesResponse[]
  isEducationalInstitutesListLoading?: boolean
  pageSize: number
  totalItems: number
}

export interface IImageLoader {
  [key: number]: string
}
