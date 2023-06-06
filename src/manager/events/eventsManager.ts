import {
  IChangeEventFormProps,
  ICreateEventParams,
  IEventsListParams,
  IEventsListProps,
} from '@allTypes/reduxTypes/eventsStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse, IAxiosResponsePaginated } from '@axios/axiosTypes'

const baseURL = 'event'

const axiosInstance = Axios()
const eventsManager = {
  axiosInstance,
  getEvents(params: IEventsListParams) {
    return axiosInstance.get<IEventsListProps, IAxiosResponsePaginated<IEventsListProps[]>>(
      `/core/v1/${baseURL}`,
      {
        params,
      }
    )
  },
  getIndividualEvent(id: string) {
    return axiosInstance.get<IEventsListProps, IAxiosResponsePaginated<IEventsListProps>>(
      `/core/v1/${baseURL}/${id}`
    )
  },
  createEvent(formData: ICreateEventParams) {
    return axiosInstance.post<ICreateEventParams, IAxiosResponsePaginated<ICreateEventParams[]>>(
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
  deleteIndividualEvent(uuid: string) {
    return axiosInstance.delete<string, IAxiosResponse<string>>(`/core/v1/${baseURL}/${uuid}`)
  },
  changeEvent(formData: IChangeEventFormProps) {
    return axiosInstance.patch<IChangeEventFormProps, IAxiosResponse<IChangeEventFormProps>>(
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

export default eventsManager
