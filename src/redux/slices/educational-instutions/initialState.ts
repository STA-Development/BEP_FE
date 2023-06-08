import { IEdInstitutesProps } from '@allTypes/reduxTypes/edInstitutesStateTypes'

export const getInitialState = (): IEdInstitutesProps => ({
  edInstitute: {
    edInstitutesList: [],
    pageSize: 0,
    totalItems: 0,
  },
  provinces: [],
  filters: { page: 1, filters: [] },
  isIndividualEduInstitutesLoading: false,
  individualEduInstitute: null,
  iCreateIndividualInstitutesSuccess: false,
  iChangeIndividualInstitutesSuccess: false,
})
