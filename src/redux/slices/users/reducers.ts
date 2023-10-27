import { IUsersList } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { IUser, IUserProps } from '@allTypes/reduxTypes/usersStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IUserProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setSignUpLoading(state, action: IAction<boolean>) {
    state.isSignUpLoading = action.payload
  },
  setLogoutLoading(state, action: IAction<boolean>) {
    state.isLogOutLoading = action.payload
  },
  setIsAuthenticated(state, action: IAction<boolean>) {
    state.isAuthenticated = action.payload
  },
  setSignInLoading(state, action: IAction<boolean>) {
    state.isSignInLoading = action.payload
  },
  setLanguage(state, action: IAction<string>) {
    state.language = action.payload
  },
  setLanguageChangeLoading(state, action: IAction<boolean>) {
    state.isLanguageChangeLoading = action.payload
  },
  setSelectedIndex(state, action: IAction<number>) {
    state.selectedIndex = action.payload
  },
  setIsResetPasswordLoading(state, action: IAction<boolean>) {
    state.isResetPasswordLoading = action.payload
  },
  setisUpdateProfileLoading(state, action: IAction<boolean>) {
    state.isUpdateProfileLoading = action.payload
  },
  setUser(state, action: IAction<IUser>) {
    state.user = action.payload
  },
  setOtp(state, action: IAction<number | null>) {
    state.otp = action.payload
  },
  setIsRoleSelectLoading(state, action: IAction<boolean>) {
    state.isRoleSelectLoading = action.payload
  },
  setIsUserAvatarLoading(state, action: IAction<boolean>) {
    state.isUserAvatarLoading = action.payload
  },
  setIsUserDetailsLoading(state, action: IAction<boolean>) {
    state.isUserDetailsLoading = action.payload
  },
  setUsersList(state, action: IAction<IUsersList[] | []>) {
    state.usersList = action.payload
  },
  setUsersListLoading(state, action: IAction<boolean>) {
    state.isUsersListLoading = action.payload
  },
  setPageSize(state, action: IAction<number>) {
    state.pageSize = action.payload
  },
  setTotalItems(state, action: IAction<number>) {
    state.totalItems = action.payload
  },
})

export default reducers
