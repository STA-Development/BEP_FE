import { INewsProps } from '@allTypes/reduxTypes/newsStateTypes'

export const getInitialState = (): INewsProps => ({
  news: {
    error: null,
    newsList: [],
    isNewsListLoading: false,
    pageSize: 0,
    totalItems: 0,
    isCreateNewsSubmitSuccess: false,
  },
  individualNews: null,
  isIndividualNewsLoading: false,
})
