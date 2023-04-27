import { IAboutUsListProps, IAboutUsProps } from '@allTypes/reduxTypes/aboutUsStateTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<IAboutUsProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<null | string | Error>) {
    state.aboutUs.error = action.payload
  },

  setAboutLoading(state, action: IAction<boolean>) {
    state.aboutUs.isAboutUsLoading = action.payload
  },

  setAboutList(state, action: IAction<IAboutUsListProps[]>) {
    state.aboutUs.aboutUsList = action.payload
  },
})

export default reducers
