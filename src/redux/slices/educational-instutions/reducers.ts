import {
  IEdInstitutesResponse,
  IIndividualEducationalInstituteResponse,
} from '@axios/educational-institutes/edInstitutesManagerTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

import { IEdInstitutesProps } from '../../../types/reduxTypes/edInstitutesStateTypes'

const createReducer = <T extends SliceCaseReducers<IEdInstitutesProps>>(reducer: T) => ({
  ...reducer,
})

const reducers = createReducer<SliceCaseReducers<IEdInstitutesProps>>({
  /* setPage(state, action: IAction<number>) {
    state.page = action.payload
  }, */
  setEducationalInstitutesList(state, action: IAction<IEdInstitutesResponse[]>) {
    state.edInstitute.edInstitutesList = action.payload
  },
  setIndividualEducationalInstitute(
    state,
    action: IAction<IIndividualEducationalInstituteResponse>
  ) {
    state.individualEduInstitute = action.payload
  },
  setEducationalInstituteListLoading(state, action: IAction<boolean>) {
    state.isIndividualEduInstitutesLoading = action.payload
  },
  setPageSize(state, action: IAction<number>) {
    state.edInstitute.pageSize = action.payload
  },

  setTotalItems(state, action: IAction<number>) {
    state.edInstitute.totalItems = action.payload
  },
  setError(state, action: IAction<string | null>) {
    state.edInstitute.error = action.payload
  },
})

export default reducers
