import {
  IEventsListProps,
  IEventsParams,
  IIndividualEventsProps,
} from '@allTypes/reduxTypes/eventsStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse, IAxiosResponsePaginated } from '@axios/axiosTypes'

const baseURL = 'event'

const axiosInstance = Axios()
const eventsManager = {
  axiosInstance,
  getEvents(params: IEventsParams) {
    return axiosInstance.get<IEventsListProps, IAxiosResponsePaginated<IEventsListProps[]>>(
      `${baseURL}`,
      {
        params,
      }
    )
  },

  getIndividualEvents(id: string) {
    return axiosInstance.get<IIndividualEventsProps, IAxiosResponse<IIndividualEventsProps>>(
      `${baseURL}/${id}`
    )
  },
}

export default eventsManager
