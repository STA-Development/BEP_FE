import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.applications

export const applications = createSelector([selector], (state) => state.applications)

export default {
  applications,
}
