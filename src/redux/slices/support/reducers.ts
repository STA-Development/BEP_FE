import { ISupportProps } from '@allTypes/reduxTypes/supportStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<ISupportProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<null | Error | string>) {
    state.support.help.error = action.payload
  },
  setHelpSubmittingLoading(state, action: IAction<boolean>) {
    state.support.help.isHelpDataSublittingLoading = action.payload
  },
  setHelpSubmitSuccess(state, action: IAction<boolean>) {
    state.support.help.isHelpDataSubmittedSuccess = action.payload
  },
  setIsContactUsSubmittingLoading(state, action: IAction<boolean>) {
    state.support.contactUs.isContactUsSubmittingLoading = action.payload
  },
  setContactUsSubmitSuccess(state, action: IAction<boolean>) {
    state.support.contactUs.isContactUsDataSubmittedSuccess = action.payload
  },
})

export default reducers
