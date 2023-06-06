import { IEventsListProps, IEventsProps } from '@allTypes/reduxTypes/eventsStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IEventsProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setEventsLoading(state, action: IAction<boolean>) {
    state.events.isEventsLoading = action.payload
  },

  setSingleEventLoading(state, action: IAction<boolean>) {
    state.isSingleEventLoading = action.payload
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
  setCreateEventSubmitSuccess(state, action: IAction<boolean>) {
    state.events.isCreateEventsSubmitSuccess = action.payload
  },
  setDeleteEventLoading(state, action: IAction<boolean>) {
    state.events.isDeleteEventLoading = action.payload
  },
  setChangeEventSubmitSuccess(state, action: IAction<boolean>) {
    state.events.isChangeEventsSubmitSuccess = action.payload
  },
})

export default reducers
