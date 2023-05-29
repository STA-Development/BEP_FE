import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.views

export const redirection = createSelector([selector], (state) => state.redirection)
export const menu = createSelector([selector], (state) => state.menu)
export const modals = createSelector([selector], (state) => state.modals)

export const error = createSelector([selector], (state) => state.error.error)
export const toastNotificationPopUp = createSelector(
  [selector],
  (state) => state.toastNotificationPopUp
)

export default {
  redirection,
  menu,
  modals,
  toastNotificationPopUp,
  error,
}
