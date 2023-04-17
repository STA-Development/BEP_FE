import { INewsProps } from '@allTypes/reduxTypes/newsStateTypes'

export const getInitialState = (): INewsProps => ({
  news: {
    error: null,
    newsList: null,
    individualNews: null,
    isNewsListLoading: false,
    isIndividualNewsLoading: false,
  },
})
