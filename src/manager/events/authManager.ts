import { IEventsDataType } from '@allTypes/reduxTypes/eventsStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponsePaginated } from '@axios/axiosTypes'

const axiosInstance = Axios()
const authManager = {
  axiosInstance,
  getEvents(currentPage: number) {
    return axiosInstance.get<IEventsDataType, IAxiosResponsePaginated<IEventsDataType[]>>(
      `core/v1/event?page=${currentPage}`
    )
  },
}

export default authManager
