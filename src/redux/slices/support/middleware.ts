import { IContactUsProps, IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setError,
  setHelpLoading,
  setHelpMessageSuccess,
  setContactUsLoading,
  setContactUsMessageSuccess,
} = slice.actions

const createHelpMessage = (message: IHelpDataProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setHelpLoading(true))

    await API.support.sendHelpData(message)

    dispatch(setHelpMessageSuccess(true))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setHelpLoading(false))
  }
}

const resetHelpMessageSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setHelpMessageSuccess(false))
}

const createContactUsMessage = (message: IContactUsProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setContactUsLoading(true))

    await API.support.sendContactUsData(message)

    dispatch(setContactUsMessageSuccess(true))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setContactUsLoading(false))
  }
}

const resetContactUsMessageSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setContactUsMessageSuccess(false))
}

export default {
  createHelpMessage,
  createContactUsMessage,
  resetHelpMessageSuccess,
  resetContactUsMessageSuccess,
}
