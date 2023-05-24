import { IContactUsProps, IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setError,
  setHelpSubmitSuccess,
  setHelpSubmitLoading,
  setContactUsSubmitSuccess,
  setContactUsSubmitLoading,
} = slice.actions

const sendHelpData = (helpData: IHelpDataProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setHelpSubmitLoading(true))
    await API.support.sendHelpData(helpData)

    dispatch(setHelpSubmitSuccess(true))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setHelpSubmitLoading(false))
  }
}

const resetHelpSubmitDataSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setHelpSubmitSuccess(false))
}

const sendContactUsData = (contactUsData: IContactUsProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setContactUsSubmitLoading(true))

    await API.support.sendContactUsData(contactUsData)

    dispatch(setContactUsSubmitSuccess(true))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response.data?.status?.message))
  } finally {
    dispatch(setContactUsSubmitLoading(false))
  }
}

const resetContactUsSubmitDataSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setContactUsSubmitSuccess(false))
}

export default {
  sendHelpData,
  sendContactUsData,
  resetHelpSubmitDataSuccess,
  resetContactUsSubmitDataSuccess,
}
