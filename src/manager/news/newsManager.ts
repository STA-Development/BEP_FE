import { IChangeNewsFormProps, ICreateNewsProps } from '@allTypes/reduxTypes/newsStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse, IAxiosResponsePaginated } from '@axios/axiosTypes'
import { IIndividualNewsResponse, INewsParams, INewsResponse } from '@axios/news/newsManagerTypes'

const baseURL = 'news'

const axiosInstance = Axios()
const newsManager = {
  axiosInstance,
  getNews(params: INewsParams) {
    return axiosInstance.get<INewsResponse, IAxiosResponsePaginated<INewsResponse[]>>(
      `/core/v1/${baseURL}`,
      {
        params,
      }
    )
  },
  getIndividualNews(id: string) {
    return axiosInstance.get<IIndividualNewsResponse, IAxiosResponse<IIndividualNewsResponse>>(
      `/core/v1/${baseURL}/${id}`
    )
  },
  createNews(formData: ICreateNewsProps) {
    return axiosInstance.post<ICreateNewsProps, IAxiosResponse<ICreateNewsProps>>(
      `/core/v1/${baseURL}`,
      {
        ...formData,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  },
  changeNews(formData: IChangeNewsFormProps) {
    return axiosInstance.patch<IChangeNewsFormProps, IAxiosResponse<IChangeNewsFormProps>>(
      `/core/v1/${baseURL}/${formData.uuid}`,
      {
        ...formData.payload,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  },
}

export default newsManager
