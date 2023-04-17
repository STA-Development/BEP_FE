import { INewsResponse } from '@axios/news/newsManagerTypes'

export interface INewsProps {
  news: INews
}

export interface INews {
  error: string | null
  newsList: INewsResponse[] | null
  individualNews: INewsResponse | null
  isNewsListLoading: boolean
  isIndividualNewsLoading: boolean
}
