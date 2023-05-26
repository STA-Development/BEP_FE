import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.support

export const help = createSelector([selector], (state) => state.support.help)
export const isHelpDataSubmitSuccess = createSelector(
  [selector],
  (state) => state.support.help.isHelpDataSubmitSuccess
)

export const isHelpDataSubmitLoading = createSelector(
  [selector],
  (state) => state.support.help.isHelpDataSubmitLoading
)

export const contactUs = createSelector([selector], (state) => state.support.contactUs)

export const isContactUsDataSubmitSuccess = createSelector(
  [selector],
  (state) => state.support.contactUs.isContactUsDataSubmitSuccess
)

export const isContactUsSubmitLoading = createSelector(
  [selector],
  (state) => state.support.contactUs.isContactUsDataSubmitLoading
)

export default {
  help,
  isHelpDataSubmitSuccess,
  isHelpDataSubmitLoading,
  contactUs,
  isContactUsDataSubmitSuccess,
  isContactUsSubmitLoading,
}
