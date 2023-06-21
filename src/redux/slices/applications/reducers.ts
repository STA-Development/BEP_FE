import {
  IApplicationsListProps,
  IApplicationsProps,
  IIndividualApplication,
  INotificationsProps,
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
  setJobSeekerSubmitSuccess(state, action: IAction<boolean>) {
    state.applications.isJobSeekerSubmitSuccess = action.payload
  },
  setJobSeekerApplicationDeleteLoading(state, action: IAction<boolean>) {
    state.applications.isJobSeekerApplicationDeleteLoading = action.payload
  },
  setJobSeekerApplicationLoading(state, action: IAction<boolean>) {
    state.applications.isJobSeekerApplicationLoading = action.payload
  },
  setOrganizationApplicationDeleteLoading(state, action: IAction<boolean>) {
    state.applications.isOrganizationApplicationDeleteLoading = action.payload
  },
  setOrganizationApplicationLoading(state, action: IAction<boolean>) {
    state.applications.isOrganizationApplicationLoading = action.payload
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
  setCloneSubmitSuccess(state, action: IAction<boolean>) {
    state.applications.isCloneApplicationSuccess = action.payload
  },
  setNotifications(state, action: IAction<INotificationsProps[] | null>) {
    state.applications.notifications = action.payload
  },
  setNotificationsId(state, action: IAction<string | null>) {
    state.applications.notificationId = action.payload
  },
})

export default reducers
