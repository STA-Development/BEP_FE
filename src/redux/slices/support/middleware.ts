import { IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setError, setHelpLoading, setHelpStatus } = slice.actions

const fetchHelpMessage = (message: IHelpDataProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setHelpLoading(true))

    const response = await API.support.sendHelpData(message)

    dispatch(setHelpStatus(response.status))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setHelpLoading(false))
  }
}

export default {
  fetchHelpMessage,
}
