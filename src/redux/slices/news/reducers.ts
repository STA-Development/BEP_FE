import { INewsProps } from '@allTypes/reduxTypes/newsStateTypes'
import { INewsResponse } from '@axios/news/newsManagerTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<INewsProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setError(state, action: IAction<string | null>) {
    state.news.error = action.payload
  },
  setNewsList(state, action: IAction<INewsResponse[]>) {
    state.news.newsList = action.payload
  },
  setIndividualNews(state, action: IAction<INewsResponse>) {
    state.news.individualNews = action.payload
  },
  setNewsListLoading(state, action: IAction<boolean>) {
    state.news.isNewsListLoading = action.payload
  },
  setIndividualNewsLoading(state, action: IAction<boolean>) {
    state.news.isIndividualNewsLoading = action.payload
  },
})

export default reducers
