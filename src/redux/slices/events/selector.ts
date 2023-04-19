import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.events

export const events = createSelector([selector], (state) => state.events)

export default {
  events,
}
