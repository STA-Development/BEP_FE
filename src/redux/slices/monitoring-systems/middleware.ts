import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setMonitoringEnumsLoading, setMonitoringEnums, setError } = slice.actions

const getMonitoringEnums = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setMonitoringEnumsLoading(true))

    const response = await API.monitoring.getMonitoringEnums()

    dispatch(setMonitoringEnums(response.data.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setMonitoringEnumsLoading(false))
  }
}

export default {
  getMonitoringEnums,
}
