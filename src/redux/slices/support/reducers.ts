import { ISupportProps } from '@allTypes/reduxTypes/supportStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<ISupportProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<null | Error | string>) {
    state.support.help.error = action.payload
  },
  setHelpLoading(state, action: IAction<boolean>) {
    state.support.help.isHelpLoading = action.payload
  },
  setHelpMessageSuccess(state, action: IAction<boolean>) {
    state.support.help.isHelpMessageSuccess = action.payload
  },
  setContactUsLoading(state, action: IAction<boolean>) {
    state.support.contactUs.isContactUsLoading = action.payload
  },
  setContactUsMessageSuccess(state, action: IAction<boolean>) {
    state.support.contactUs.isContactUsMessageSuccess = action.payload
  },
})

export default reducers
