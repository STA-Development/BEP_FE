import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'
import { IExampleListParams, IExampleResponse } from '@axios/example/managerExampleTypes'

const baseURL = '/clinic-booking'

const axiosInstance = Axios()
const exampleManager = {
  axiosInstance,
  getExampleValue(params: IExampleListParams) {
    return axiosInstance.get<IExampleResponse, IAxiosResponse>(`${baseURL}/v1/example`, { params })
  },
}

export default exampleManager
