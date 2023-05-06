import { IUserProps } from '@allTypes/reduxTypes/usersStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IUserProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<string | null>) {
    state.user.error = action.payload
  },
  setErrorGoogleSignIn(state, action: IAction<string | null>) {
    state.user.errorGoogleSignIn = action.payload
  },
  setSignUpLoading(state, action: IAction<boolean>) {
    state.user.isSignUpLoading = action.payload
  },
  setLogoutLoading(state, action: IAction<boolean>) {
    state.user.isLogOutLoading = action.payload
  },
  setIsAuthenticated(state, action: IAction<boolean>) {
    state.user.isAuthenticated = action.payload
  },
  setSignInLoading(state, action: IAction<boolean>) {
    state.user.isSignInLoading = action.payload
  },
  setLanguage(state, action: IAction<string>) {
    state.user.language = action.payload
  },
  setLanguageChangeLoading(state, action: IAction<boolean>) {
    state.user.isLanguageChangeLoading = action.payload
  },
  setSelectedIndex(state, action: IAction<number>) {
    state.user.selectedIndex = action.payload
  },
  setIsResetPasswordLoading(state, action: IAction<boolean>) {
    state.user.isResetPasswordLoading = action.payload
  },
  setOtp(state, action: IAction<number | null>) {
    state.user.otp = action.payload
  },
})

export default reducers
