import { INewsProps } from '@allTypes/reduxTypes/newsStateTypes'
import { IIndividualNewsResponse, INewsResponse } from '@axios/news/newsManagerTypes'
import { IAction } from '@redux/store'
import { SliceCaseReducers } from '@reduxjs/toolkit/src/createSlice'

const createReducer = <T extends SliceCaseReducers<INewsProps>>(reducer: T) => ({ ...reducer })

const reducers = createReducer({
  setNewsList(state, action: IAction<INewsResponse[]>) {
    state.news.newsList = action.payload
  },
  setIndividualNews(state, action: IAction<IIndividualNewsResponse>) {
    state.individualNews = action.payload
  },
  setNewsListLoading(state, action: IAction<boolean>) {
    state.news.isNewsListLoading = action.payload
  },
  setIndividualNewsLoading(state, action: IAction<boolean>) {
    state.news.isIndividualNewsLoading = action.payload
  },
  setPageSize(state, action: IAction<number>) {
    state.news.pageSize = action.payload
  },

  setTotalItems(state, action: IAction<number>) {
    state.news.totalItems = action.payload
  },
  setCreateNewsSubmitSuccess(state, action: IAction<boolean>) {
    state.news.isCreateNewsSubmitSuccess = action.payload
  },
  setChangeNewsSubmitSuccess(state, action: IAction<boolean>) {
    state.news.isChangeNewsSubmitSuccess = action.payload
  },
  setDeleteNewsLoading(state, action: IAction<boolean>) {
    state.news.isDeleteNewsLoading = action.payload
  },
})

export default reducers
