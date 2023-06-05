import { INewsProps } from '@allTypes/reduxTypes/newsStateTypes'

export const getInitialState = (): INewsProps => ({
  news: {
    newsList: [],
    isNewsListLoading: false,
    pageSize: 0,
    totalItems: 0,
  },
  individualNews: null,
  isIndividualNewsLoading: false,
})
