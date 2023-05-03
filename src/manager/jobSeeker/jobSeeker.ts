import { IJobSeekerProps, IOrganizationProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const baseURL = '/users'

const axiosInstance = Axios()
const applicationsManager = {
  axiosInstance,
  jobSeeker(data: IJobSeekerProps) {
    return axiosInstance.post<IJobSeekerProps, IAxiosResponse<IJobSeekerProps>>(
      `${baseURL}/v1/job-seeker/application`,
      {
        ...data,
      }
    )
  },
  organization(data: IOrganizationProps) {
    return axiosInstance.post<IOrganizationProps, IAxiosResponse<IOrganizationProps>>(
      `${baseURL}/v1/organization/application`,
      {
        ...data,
      }
    )
  },
}

export default applicationsManager
