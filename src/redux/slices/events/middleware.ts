import API from '@axios/API'
import store, { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setEventsLoading,
  setEventsList,
  setPageSize,
  setTotalItems,
  setSingleEventLoading,
  setSingleEventData,
} = slice.actions

const getEventsList = (page: number) => async (dispatch: AppDispatch) => {
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
    /* empty */
  } finally {
    dispatch(setEventsLoading(false))
  }
}

const getSingleEvent = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSingleEventLoading(true))

    const response = await API.events.getIndividualEvent(id)

    dispatch(setSingleEventData(response.data.data))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setSingleEventLoading(false))
  }
}

const clearEventsList = () => async (dispatch: AppDispatch) => {
  dispatch(setEventsList([]))
  dispatch(setPageSize(0))
  dispatch(setTotalItems(0))
}

export default {
  getEventsList,
  getSingleEvent,
  clearEventsList,
}
