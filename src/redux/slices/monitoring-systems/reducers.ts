import {
  IMonitoringEnums,
  IMonitoringProps,
  IMonitoringStudentResponse,
} from '@allTypes/reduxTypes/monitoringStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IMonitoringProps>>(reducer: T) => ({
  ...reducer,
})

const reducers = createReducer({
  setError(state, action: IAction<null | Error | string>) {
    state.error = action.payload
  },

  setMonitoringEnumsLoading(state, action: IAction<boolean>) {
    state.isMonitoringEnumsLoading = action.payload
  },

  setMonitoringEnums(state, action: IAction<IMonitoringEnums | null>) {
    state.monitoringEnums = action.payload
  },

  setMonitoringStudent(state, action: IAction<IMonitoringStudentResponse[]>) {
    state.monitoringStudent = action.payload
  },

  setMonitoringStudentLoading(state, action: IAction<boolean>) {
    state.isMonitoringStudentLoading = action.payload
  },
})

export default reducers
