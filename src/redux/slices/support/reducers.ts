import { ISupportProps } from '@allTypes/reduxTypes/supportStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<ISupportProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setHelpSubmitSuccess(state, action: IAction<boolean>) {
    state.support.help.isHelpDataSubmitSuccess = action.payload
  },
  setHelpSubmitLoading(state, action: IAction<boolean>) {
    state.support.help.isHelpDataSubmitLoading = action.payload
  },

  setContactUsSubmitLoading(state, action: IAction<boolean>) {
    state.support.contactUs.isContactUsDataSubmitLoading = action.payload
  },
  setContactUsSubmitSuccess(state, action: IAction<boolean>) {
    state.support.contactUs.isContactUsDataSubmitSuccess = action.payload
  },
})

export default reducers
