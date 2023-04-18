import { IEventsDataProps, IEventsParams } from '@allTypes/reduxTypes/eventsStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponsePaginated } from '@axios/axiosTypes'

const baseURL = 'event'

const axiosInstance = Axios()
const eventsManager = {
  axiosInstance,
  getEvents(params: IEventsParams) {
    return axiosInstance.get<IEventsDataProps, IAxiosResponsePaginated<IEventsDataProps[]>>(
      `${baseURL}`,
      {
        params,
      }
    )
  },
}

export default eventsManager
