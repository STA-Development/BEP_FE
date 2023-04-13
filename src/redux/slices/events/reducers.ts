import { IEventsDataType, IEventsProps } from '@allTypes/reduxTypes/eventsStateTypes'
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

  setEventsData(state, action: IAction<IEventsDataType[]>) {
    state.events.eventsData = [...state.events.eventsData, ...action.payload]
  },

  setPageSize(state, action: IAction<number>) {
    state.events.pageSize = action.payload
  },
})

export default reducers
