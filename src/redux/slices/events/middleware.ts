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
  setIndividualEventsLoading,
  setIndividualEvents,
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

const getIndividualEventsById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIndividualEventsLoading(true))

    const response = await API.events.getIndividualEvents(id)

    dispatch(setIndividualEvents(response.data.data))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status?.message))
  } finally {
    dispatch(setIndividualEventsLoading(false))
  }
}

export default {
  fetchEventsList,
  getIndividualEventsById,
}
