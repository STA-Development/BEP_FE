import { IEdInstitutesProps } from '@allTypes/reduxTypes/edInstitutesStateTypes'

export const getInitialState = (): IEdInstitutesProps => ({
  edInstitute: {
    edInstitutesList: [],
    pageSize: 0,
    totalItems: 0,
  },
  isIndividualEduInstitutesLoading: false,
  individualEduInstitute: null,
})
