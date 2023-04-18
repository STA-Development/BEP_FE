import { IEventsListProps, IEventsProps } from '@allTypes/reduxTypes/eventsStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IEventsProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<string>) {
    state.events.error = action.payload
  },

  setEventsLoading(state, action: IAction<boolean>) {
    state.events.isEventsLoading = action.payload
  },

  setSingleEventLoading(state, action: IAction<boolean>) {
    state.events.isSingleEventLoading = action.payload
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

  setSingleEventData(state, action: IAction<IEventsListProps>) {
    state.singleEventData = action.payload
  },
})

export default reducers
