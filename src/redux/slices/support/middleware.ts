import { IContactUsProps, IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setError, setHelpLoading, setContactUsLoading, setContactUsStatus } = slice.actions

const fetchHelpMessage = (message: IHelpDataProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setHelpLoading(true))

    await API.support.sendHelpData(message)

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setHelpLoading(false))
  }
}

const fetchContactUsMessage = (message: IContactUsProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setContactUsLoading(true))

    const response = await API.support.sendContactUsData(message)

    dispatch(setContactUsStatus(response.status))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setContactUsLoading(false))
  }
}

export default {
  fetchHelpMessage,
  fetchContactUsMessage,
}
