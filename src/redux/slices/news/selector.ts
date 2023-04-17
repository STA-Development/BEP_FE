import { RootState } from '@redux/store'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: RootState) => state.news

export const newsList = createSelector([selector], (state) => state.news.newsList)
export const individualNews = createSelector([selector], (state) => state.news.individualNews)

export default {
  newsList,
  individualNews,
}
