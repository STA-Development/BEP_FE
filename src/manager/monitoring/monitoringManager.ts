import {
  IMonitoringEnums,
  IMonitoringStudentListParams,
  IMonitoringStudentResponse,
} from '@allTypes/reduxTypes/monitoringStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const baseURL = 'user'

const axiosInstance = Axios()
const aboutUsManager = {
  axiosInstance,
  getMonitoringEnums() {
    return axiosInstance.get<IMonitoringEnums, IAxiosResponse<IMonitoringEnums>>(
      `/users/v1/${baseURL}/monitoring-system-values`
    )
  },
  getMonitoringStudent(params: IMonitoringStudentListParams | []) {
    return axiosInstance.post<
      IMonitoringStudentResponse[],
      IAxiosResponse<IMonitoringStudentResponse[]>
    >(`/users/v1/monitoring-system/student-info`, {
      filters: [params],
    })
  },
}

export default aboutUsManager
