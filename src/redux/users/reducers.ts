import { UsersProps } from '@allTypes/reduxTypes/usersStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<UsersProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<boolean>) {
    state.user.error = action.payload
  },
  setIsLoading(state, action: IAction<boolean>) {
    state.user.isLoading = action.payload
  },
  setSuccessfully(state, action: IAction<boolean>) {
    state.user.successfully = action.payload
  },
})

export default reducers
