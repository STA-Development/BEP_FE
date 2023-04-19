import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import store, { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setEventsLoading,
  setError,
  setEventsList,
  setPageSize,
  setTotalItems,
  setSingleEventLoading,
  setSingleEventData,
} = slice.actions

const fetchEventsList = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setEventsLoading(true))

    const reqBody = {
      page,
    }

    const response = await API.events.getEvents(reqBody)

    const responseData = response.data

    const { eventsList } = store.getState().events.events

    dispatch(setEventsList([...eventsList, ...responseData.data]))
    dispatch(setPageSize(responseData.pageSize))
    dispatch(setEventsLoading(false))
    dispatch(setTotalItems(responseData.totalItems))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setEventsLoading(false))
  }
}

const fetchSingleEvent = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSingleEventLoading(true))

    const response = await API.events.getIndividualEvent(id)

    dispatch(setSingleEventData(response.data.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setSingleEventLoading(false))
  }
}

export default {
  fetchEventsList,
  fetchSingleEvent,
}
