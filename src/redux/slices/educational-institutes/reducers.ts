import { IUserProps } from '@allTypes/reduxTypes/usersStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IUserProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<string | null>) {
    state.user.error = action.payload
  },
})

export default reducers
