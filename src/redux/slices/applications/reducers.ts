import { IApplicationsProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IApplicationsProps>>(reducer: T) => ({
  ...reducer,
})

const reducers = createReducer({
  setJobSeekerLoading(state, action: IAction<boolean>) {
    state.applications.isJobSeekerLoading = action.payload
  },
  setError(state, action: IAction<null | string>) {
    state.applications.error = action.payload
  },
  setJobSeekerSubmitSuccess(state, action: IAction<boolean>) {
    state.applications.isJobSeekerSubmitSuccess = action.payload
  },
})

export default reducers
