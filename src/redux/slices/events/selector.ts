import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.events

export const events = createSelector([selector], (state) => state.events)
export const individualEvents = createSelector([selector], (state) => state.events.individualEvents)
export default {
  events,
  individualEvents,
}
