import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.applications

export const jobSeeker = createSelector([selector], (state) => state.applications.jobSeeker)
export const organization = createSelector([selector], (state) => state.applications.organization)
export default {
  jobSeeker,
  organization,
}
