import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import store, { AppDispatch } from '@redux/store'

import slice from './slice'

const { setEventsLoading, setError, setEventsData, setPageSize, setTotalItems } = slice.actions

const events = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setEventsLoading(true))

    const reqBody = {
      page,
    }

    const response = await API.events.getEvents(reqBody)

    const responseData = response.data

    const { eventsData } = store.getState().events.events

    dispatch(setEventsData([...eventsData, ...responseData.data]))
    dispatch(setPageSize(responseData.pageSize))
    dispatch(setEventsLoading(false))
    dispatch(setTotalItems(responseData.totalItems))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setEventsLoading(false))
  }
}

export default {
  events,
}
