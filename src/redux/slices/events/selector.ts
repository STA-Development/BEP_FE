import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.events

export const eventsData = createSelector([selector], (state) => state.events)
export const singleEvent = createSelector([selector], (state) => state.singleEventData)
export const isSingleEventLoading = createSelector(
  [selector],
  (state) => state.isSingleEventLoading
)

export default {
  eventsData,
  singleEvent,
  isSingleEventLoading,
}
