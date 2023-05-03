import { IApplicationsProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IApplicationsProps>>(reducer: T) => ({
  ...reducer,
})

const reducers = createReducer({
  setJobSeekerLoading(state, action: IAction<boolean>) {
    state.applications.jobSeeker.isJobSeekerLoading = action.payload
  },
  setError(state, action: IAction<null | string>) {
    state.applications.jobSeeker.error = action.payload
  },
  setJobSeekerSubmitSuccess(state, action: IAction<boolean>) {
    state.applications.jobSeeker.isJobSeekerSubmitSuccess = action.payload
  },
  setOrganizationLoading(state, action: IAction<boolean>) {
    state.applications.organization.isOrganizationLoading = action.payload
  },
  setOrganizationSubmitSuccess(state, action: IAction<boolean>) {
    state.applications.organization.isOrganizationSubmitSuccess = action.payload
  },
})

export default reducers
