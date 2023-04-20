import { IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setError, setHelpLoading, setHelpMessageSuccess } = slice.actions

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
    dispatch(setHelpMessageSuccess(false))
  }
}

export default {
  createHelpMessage,
}
