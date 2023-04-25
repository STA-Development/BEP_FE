import { IEdInstitutesResponse } from '@axios/educational-institutes/edInstitutesManagerTypes'
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
})

export default reducers
