import { IProfileProps, IUserProps } from '@allTypes/reduxTypes/usersStateTypes'
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
  setImageUpload(state, action: IAction<null | File>) {
    state.user.image = action.payload
  },
  setImageUploadLoading(state, action: IAction<boolean>) {
    state.user.isImageUploadLoading = action.payload
  },
  setRole(state, action: IAction<string>) {
    state.user.role = action.payload
  },
  setProfileLoading(state, action: IAction<boolean>) {
    state.user.isProfileLoading = action.payload
  },
  setUserDataInfoLoading(state, action: IAction<boolean>) {
    state.user.isUserDataInfoLoading = action.payload
  },
  setUserDataInfo(state, action: IAction<IProfileProps | null>) {
    state.user.userDataInfo = action.payload
  },
  setChangeUserInfoSuccess(state, action: IAction<boolean>) {
    state.user.isChangeUserInfoSuccess = action.payload
  },
})

export default reducers
