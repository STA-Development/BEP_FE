import { IAreaSpecializationProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IAreaSpecializationProps>>(reducer: T) => ({
  ...reducer,
})

const reducers = createReducer({
  setJobSeekerLoading(state, action: IAction<boolean>) {
    state.jobSeeker.isJobSeekerLoading = action.payload
  },
  setError(state, action: IAction<null | string>) {
    state.jobSeeker.error = action.payload
  },
  setJobSeekerSubmitSuccess(state, action: IAction<boolean>) {
    state.jobSeeker.isJobSeekerSubmitSuccess = action.payload
  },
})

export default reducers
