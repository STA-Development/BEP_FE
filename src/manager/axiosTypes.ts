import { AxiosResponse } from 'axios'

export interface IAxiosResponse extends AxiosResponse {
  data: AxiosResponse
}
export interface IAxiosResponsePaginated extends AxiosResponse {
  data: IPaginatedData
}

interface IResponseStatus {
  code: string
  message?: string
  title?: string
}

interface IData extends IResponseStatus {
  data: AxiosResponse
  status: IResponseStatus
}

export interface IPagination {
  pageSize: number
  currentPage: number
  totalItems: number
}

interface IPaginatedData extends IData, IPagination {}
