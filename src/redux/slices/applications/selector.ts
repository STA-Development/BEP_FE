import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.applications

export const applications = createSelector([selector], (state) => state.applications)

export const isOrganizationLoading = createSelector(
  [selector],
  (state) => state.applications.isOrganizationLoading
)
export const isJobSeekerLoading = createSelector(
  [selector],
  (state) => state.applications.isJobSeekerLoading
)
export const isOrganizationApplicationDeleteLoading = createSelector(
  [selector],
  (state) => state.applications.isOrganizationApplicationDeleteLoading
)
export const isJobSeekerApplicationDeleteLoading = createSelector(
  [selector],
  (state) => state.applications.isJobSeekerApplicationDeleteLoading
)
export const isOrganizationApplicationLoading = createSelector(
  [selector],
  (state) => state.applications.isOrganizationApplicationLoading
)
export const isJobSeekerApplicationLoading = createSelector(
  [selector],
  (state) => state.applications.isJobSeekerApplicationLoading
)

export default {
  applications,
  isOrganizationLoading,
  isJobSeekerLoading,
  isJobSeekerApplicationDeleteLoading,
  isOrganizationApplicationDeleteLoading,
  isOrganizationApplicationLoading,
  isJobSeekerApplicationLoading,
}
