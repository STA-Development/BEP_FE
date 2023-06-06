import { IChangeEventFormProps, ICreateEventParams } from '@allTypes/reduxTypes/eventsStateTypes'
import API from '@axios/API'
import { eventsMiddleware } from '@redux/slices/events/index'
import store, { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setEventsLoading,
  setEventsList,
  setPageSize,
  setTotalItems,
  setSingleEventLoading,
  setSingleEventData,
  setCreateEventSubmitSuccess,
  setChangeEventSubmitSuccess,
  setDeleteEventLoading,
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

const createEvent = (formData: ICreateEventParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setCreateEventSubmitSuccess(true))
    await API.events.createEvent(formData)
  } catch (error) {
    /* empty */
  }
}

const clearEventsList = () => async (dispatch: AppDispatch) => {
  dispatch(setEventsList([]))
  dispatch(setPageSize(0))
  dispatch(setTotalItems(0))
}

const resetCreateEventsSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setCreateEventSubmitSuccess(false))
}

const deleteIndividualEvent = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setDeleteEventLoading(true))

    await API.events.deleteIndividualEvent(uuid)

    dispatch(clearEventsList())

    dispatch(eventsMiddleware.getEventsList(1))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setDeleteEventLoading(true))
  }
}

const changeEvent = (formData: IChangeEventFormProps) => async (dispatch: AppDispatch) => {
  try {
    await API.events.changeEvent(formData)

    dispatch(setChangeEventSubmitSuccess(true))
  } catch (error) {
    /* empty */
  }
}

const resetChangeEventSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setChangeEventSubmitSuccess(false))
}

export default {
  getEventsList,
  getSingleEvent,
  createEvent,
  clearEventsList,
  resetCreateEventsSubmitSuccess,
  deleteIndividualEvent,
  changeEvent,
  resetChangeEventSubmitSuccess,
}
