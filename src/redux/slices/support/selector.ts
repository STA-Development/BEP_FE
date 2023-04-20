import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.support

export const help = createSelector([selector], (state) => state.support.help)
export const isHelpMessageSuccess = createSelector(
  [selector],
  (state) => state.support.help.isHelpMessageSuccess
)
export const contactUs = createSelector([selector], (state) => state.support.contactUs)

export const isContactUsMessageSuccess = createSelector(
  [selector],
  (state) => state.support.contactUs.isContactUsMessageSuccess
)

export default {
  help,
  isHelpMessageSuccess,
  contactUs,
  isContactUsMessageSuccess,
}
