import { AxiosResponse } from 'axios'

export interface IAxiosResponse<T> extends AxiosResponse {
  data: IData<T>
}
export interface IAxiosResponsePaginated<T> extends AxiosResponse {
  data: IPaginatedData<T>
}

interface IResponseStatus {
  code: string
  message?: string
  title?: string
}

interface IData<T> extends IResponseStatus {
  data: T
  status: IResponseStatus
}

export interface IPagination {
  pageSize: number
  currentPage: number
  totalItems: number
}

interface IPaginatedData<T> extends IData<T>, IPagination {}
