import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.support

export const help = createSelector([selector], (state) => state.support.help)
export const isHelpDataSubmittedSuccess = createSelector(
  [selector],
  (state) => state.support.help.isHelpDataSubmittedSuccess
)
export const contactUs = createSelector([selector], (state) => state.support.contactUs)

export const isContactUsDataSubmittedSuccess = createSelector(
  [selector],
  (state) => state.support.contactUs.isContactUsDataSubmittedSuccess
)

export default {
  help,
  isHelpDataSubmittedSuccess,
  contactUs,
  isContactUsDataSubmittedSuccess,
}
