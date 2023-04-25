import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.support

export const support = createSelector([selector], (state) => state.support)

export default {
  support,
}
