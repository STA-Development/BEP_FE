import { INewsResponse } from '@axios/news/newsManagerTypes'

export interface INewsProps {
  news: INews
  isIndividualNewsLoading: boolean
  individualNews: INewsResponse | null
}

export interface INews {
  newsList: INewsResponse[]
  isNewsListLoading?: boolean
  pageSize: number
  totalItems: number
}
