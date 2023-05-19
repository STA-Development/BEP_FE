import {
  IApplicationsListProps,
  IApplicationsProps,
  IIndividualApplication,
} from '@allTypes/reduxTypes/areaSpecializationTypes'
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
  setOrganizationLoading(state, action: IAction<boolean>) {
    state.applications.isOrganizationLoading = action.payload
  },
  setOrganizationSubmitSuccess(state, action: IAction<boolean>) {
    state.applications.isOrganizationSubmitSuccess = action.payload
  },
  setApplicationsList(state, action: IAction<IApplicationsListProps[] | null>) {
    state.applications.applicationsList = action.payload
  },
  setApplicationsLoading(state, action: IAction<boolean>) {
    state.applications.isApplicationLoading = action.payload
  },
  setIndividualApplication(state, action: IAction<null | IIndividualApplication>) {
    state.applications.individualApplication = action.payload
  },
  setApplicationsPdf(state, action: IAction<null | File>) {
    state.applications.applicationsPdf = action.payload
  },
  setChangeIsActiveSuccess(state, action: IAction<boolean>) {
    state.applications.isChangeIsActiveSuccess = action.payload
  },
})

export default reducers
