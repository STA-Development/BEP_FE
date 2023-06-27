import { IMonitoringEnums } from '@allTypes/reduxTypes/monitoringStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'
import { IParamsProps } from '@components/Educationalnstitutes/helper'

const baseURL = 'monitoring-system'

const axiosInstance = Axios()
const aboutUsManager = {
  axiosInstance,
  getMonitoringEnums(params: IParamsProps[]) {
    return axiosInstance.post<IMonitoringEnums, IAxiosResponse<IMonitoringEnums>>(
      `/users/v1/${baseURL}/student-info`,
      {
        filters: [...params],
      }
    )
  },
}

export default aboutUsManager
