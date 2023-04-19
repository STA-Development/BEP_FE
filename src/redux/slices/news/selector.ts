import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.news

export const news = createSelector([selector], (state) => state.news)
export const newsList = createSelector([selector], (state) => state.news.newsList)
export const individualNews = createSelector([selector], (state) => state.individualNews)
export const isIndividualNewsLoading = createSelector(
  [selector],
  (state) => state.isIndividualNewsLoading
)
export const isNewsListLoading = createSelector([selector], (state) => state.news.isNewsListLoading)

export default {
  news,
  newsList,
  individualNews,
  isNewsListLoading,
  isIndividualNewsLoading,
}
