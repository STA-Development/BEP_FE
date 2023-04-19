import { IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setError, setHelpLoading } = slice.actions

const fetchHelpMessage = (message: IHelpDataProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setHelpLoading(true))

    await API.support.sendHelpData(message)
    dispatch(setError(null))
    dispatch(setHelpLoading(false))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setHelpLoading(false))
  }
}

export default {
  fetchHelpMessage,
}
