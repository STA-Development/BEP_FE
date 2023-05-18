import { INewsResponse } from '@axios/news/newsManagerTypes'

export interface INewsProps {
  news: INews
  individualNews: INewsResponse | null
}

export interface INews {
  error?: string | null
  newsList: INewsResponse[]
  isNewsListLoading?: boolean
  pageSize: number
  totalItems: number
  isCreateNewsSubmitSuccess: boolean
  isChangeNewsSubmitSuccess: boolean
  isIndividualNewsLoading: boolean
}

export interface ICreateNewsProps {
  header: string
  paragraph: string
  imageUrl: FileList | File | null
}

export interface IChangeNewsForm {
  header?: string
  paragraph?: string
  imageUrl?: string
}

export interface IChangeNewsFormProps {
  payload: IChangeNewsForm
  uuid: string
}

export interface FormData {
  header?: string
  paragraph?: string
  imageUrl?: string
}
