import {
  IEventsListProps,
  IEventsProps,
  IIndividualEventsProps,
} from '@allTypes/reduxTypes/eventsStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IEventsProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<null | string>) {
    state.events.error = action.payload
  },

  setEventsLoading(state, action: IAction<boolean>) {
    state.events.isEventsLoading = action.payload
  },

  setEventsList(state, action: IAction<IEventsListProps[]>) {
    state.events.eventsList = action.payload
  },

  setPageSize(state, action: IAction<number>) {
    state.events.pageSize = action.payload
  },

  setTotalItems(state, action: IAction<number>) {
    state.events.totalItems = action.payload
  },
  setIndividualEvents(state, action: IAction<IIndividualEventsProps>) {
    state.events.individualEvents = action.payload
  },
  setIndividualEventsLoading(state, action: IAction<boolean>) {
    state.events.isIndividualEventsLoading = action.payload
  },
})

export default reducers
