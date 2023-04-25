import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.users

export const user = createSelector([selector], (state) => state.user)
export const selectedLanguage = createSelector([selector], (state) => state.user.language)

export default {
  user,
  selectedLanguage,
}
