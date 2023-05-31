import { IIndividualNewsResponse, INewsResponse } from '@axios/news/newsManagerTypes'

export interface INewsProps {
  news: INews
  individualNews: IIndividualNewsResponse | null
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
  isDeleteNewsLoading: boolean
}

export interface ICreateNewsProps {
  header: string
  paragraph: string
  imageURL: FileList | File | null
}

export interface IFormData {
  header: string
  paragraph: string
  imageURL: string | File
}

export interface IChangeNewsForm {
  header?: string
  paragraph?: string
  imageURL?: string | File
}

export interface IChangeNewsFormProps {
  payload: IChangeNewsForm
  uuid: string
}
