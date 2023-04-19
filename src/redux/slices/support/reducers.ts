import { ISupportProps } from '@allTypes/reduxTypes/supportStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<ISupportProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<null | string>) {
    state.support.error = action.payload
  },
  setHelpLoading(state, action: IAction<boolean>) {
    state.support.isHelpLoading = action.payload
  },
})

export default reducers