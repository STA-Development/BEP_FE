import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setAboutLoading, setError, setAboutList } = slice.actions

const getAboutUsList = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setAboutLoading(true))

    const response = await API.aboutUs.getAboutUs()

    const responseData = response.data

    dispatch(setAboutList(responseData.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setAboutLoading(false))
  }
}

export default {
  getAboutUsList,
}
