import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.aboutUs

export const aboutUs = createSelector([selector], (state) => state.aboutUs)

export default {
  aboutUs,
}
