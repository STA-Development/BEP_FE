import { IUserProps } from '@allTypes/reduxTypes/usersStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IUserProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<Error | null>) {
    state.user.error = action.payload
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
})

export default reducers
