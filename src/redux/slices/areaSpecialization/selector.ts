import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.jobSeeker

export const jobSeeker = createSelector([selector], (state) => state.jobSeeker)

export default {
  jobSeeker,
}
