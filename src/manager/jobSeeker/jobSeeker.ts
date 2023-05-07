import {
  IJobSeekerApplicationProps,
  IJobSeekerProps,
} from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const baseURL = '/users'

const axiosInstance = Axios()
const jobSeekerManager = {
  axiosInstance,
  createApplication(data: IJobSeekerApplicationProps) {
    return axiosInstance.post<
      IJobSeekerApplicationProps,
      IAxiosResponse<IJobSeekerApplicationProps>
    >(`${baseURL}/v1/job-seeker/application`, {
      ...data,
    })
  },
  getJobSeeker() {
    return axiosInstance.get<IJobSeekerProps, IAxiosResponse<IJobSeekerProps>>(
      `${baseURL}/v1/job-seeker`
    )
  },
}

export default jobSeekerManager
