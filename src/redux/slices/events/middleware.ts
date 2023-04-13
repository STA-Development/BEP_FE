import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setEventsLoading, setError, setEventsData, setPageSize } = slice.actions

const events = (currentPage: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setEventsLoading(true))

    const response = await API.events.getEvents(currentPage)

    console.log(response, 'response')
    dispatch(setEventsData(response.data.data))
    dispatch(setPageSize(response.data.pageSize))
    dispatch(setEventsLoading(false))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setEventsLoading(false))
  }
}

export default {
  events,
}
