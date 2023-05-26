import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.users

export const user = createSelector([selector], (state) => state.user)
export const isSignInLoading = createSelector([selector], (state) => state.isSignInLoading)
export const isSignUpLoading = createSelector([selector], (state) => state.isSignUpLoading)
export const isUpdateProfileLoading = createSelector(
  [selector],
  (state) => state.isUpdateProfileLoading
)
export const isLogOutLoading = createSelector([selector], (state) => state.isLogOutLoading)
export const isUserAvatarLoading = createSelector([selector], (state) => state.isUserAvatarLoading)
export const isUserDetailsLoading = createSelector(
  [selector],
  (state) => state.isUserDetailsLoading
)
export const isResetPasswordLoading = createSelector(
  [selector],
  (state) => state.isResetPasswordLoading
)
export const error = createSelector([selector], (state) => state.error)
export const isAuthenticated = createSelector([selector], (state) => state.isAuthenticated)
export const language = createSelector([selector], (state) => state.language)
export const isLanguageChangeLoading = createSelector(
  [selector],
  (state) => state.isLanguageChangeLoading
)
export const errorGoogleSignIn = createSelector([selector], (state) => state.errorGoogleSignIn)
export const selectedIndex = createSelector([selector], (state) => state.selectedIndex)
export const otp = createSelector([selector], (state) => state.otp)
export const selectedLanguage = createSelector([selector], (state) => state.language)
export const isRoleSelectLoading = createSelector([selector], (state) => state.isRoleSelectLoading)
export const userAvatar = createSelector([selector], (state) => state.user.imageURL)

export default {
  user,
  isSignInLoading,
  isSignUpLoading,
  isLogOutLoading,
  isResetPasswordLoading,
  error,
  isUpdateProfileLoading,
  isAuthenticated,
  language,
  isLanguageChangeLoading,
  errorGoogleSignIn,
  selectedIndex,
  otp,
  selectedLanguage,
  isRoleSelectLoading,
  isUserAvatarLoading,
  isUserDetailsLoading,
  userAvatar,
}
