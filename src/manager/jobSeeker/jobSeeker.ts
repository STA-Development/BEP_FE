import {
  IJobSeekerApplicationProps,
  IJobSeekerProps,
  IProfileUpdateProps,
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
  updateJobSeekerProfile(data: IProfileUpdateProps) {
    return axiosInstance.patch<null, IAxiosResponse<null>>(`${baseURL}/v1/job-seeker`, data)
  },
  updateOrganizationProfile(data: IProfileUpdateProps) {
    return axiosInstance.patch<null, IAxiosResponse<null>>(`${baseURL}/v1/organization`, data)
  },
}

export default jobSeekerManager
