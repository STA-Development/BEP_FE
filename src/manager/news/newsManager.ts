import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse, IAxiosResponsePaginated } from '@axios/axiosTypes'
import { IIndividualNewsResponse, INewsParams, INewsResponse } from '@axios/news/newsManagerTypes'

const baseURL = 'news'

const axiosInstance = Axios()
const newsManager = {
  axiosInstance,
  getNews(params: INewsParams) {
    return axiosInstance.get<INewsResponse, IAxiosResponsePaginated<INewsResponse[]>>(
      `${baseURL}`,
      {
        params,
      }
    )
  },
  getIndividualNews(id: string) {
    return axiosInstance.get<IIndividualNewsResponse, IAxiosResponse<IIndividualNewsResponse>>(
      `${baseURL}/${id}`
    )
  },
}

export default newsManager
