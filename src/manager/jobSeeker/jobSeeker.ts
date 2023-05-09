import {
  IApplicationsListProps,
  IIndividualApplication,
  IJobSeekerApplicationProps,
  IJobSeekerProfileProps,
  IJobSeekerProps,
  IOrganizationApplicationProps,
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

  getJobSeekerApplication() {
    return axiosInstance.get<IApplicationsListProps[], IAxiosResponse<IApplicationsListProps[]>>(
      `${baseURL}/v1/job-seeker/application`
    )
  },

  deleteJobSeekerApplication(uuid: string) {
    return axiosInstance.delete<string, IAxiosResponse<string>>(
      `${baseURL}/v1/job-seeker/application/${uuid}`
    )
  },

  getJobSeekerIndividualApplication(uuid: string) {
    return axiosInstance.get<IIndividualApplication, IAxiosResponse<IIndividualApplication>>(
      `${baseURL}/v1/job-seeker/application/${uuid}`
    )
  },

  upDateJobSeekerIndividualApplication(params: IOrganizationApplicationProps) {
    return axiosInstance.patch<
      IOrganizationApplicationProps,
      IAxiosResponse<IOrganizationApplicationProps>
    >(`${baseURL}/v1/job-seeker/application/${params.uuid}`, {
      ...params,
    })
  },

  updateJobSeekerProfile(data: IJobSeekerProfileProps) {
    return axiosInstance.patch<null, IAxiosResponse<null>>(`${baseURL}/v1/job-seeker`, data)
  },

  organization(data: IOrganizationApplicationProps) {
    return axiosInstance.post<
      IOrganizationApplicationProps,
      IAxiosResponse<IOrganizationApplicationProps>
    >(`${baseURL}/v1/organization/application`, {
      ...data,
    })
  },

  getOrganizationApplication() {
    return axiosInstance.get<IApplicationsListProps[], IAxiosResponse<IApplicationsListProps[]>>(
      `${baseURL}/v1/organization/application`
    )
  },

  getOrganizationIndividualApplication(uuid: string) {
    return axiosInstance.get<IIndividualApplication, IAxiosResponse<IIndividualApplication>>(
      `${baseURL}/v1/organization/application/${uuid}`
    )
  },

  updateOrganizationIndividualApplication(params: IOrganizationApplicationProps) {
    return axiosInstance.patch<
      IOrganizationApplicationProps,
      IAxiosResponse<IOrganizationApplicationProps>
    >(`${baseURL}/v1/organization/application/${params.uuid}`, {
      ...params,
    })
  },

  deleteOrganizationApplication(uuid: string) {
    return axiosInstance.delete<string, IAxiosResponse<string>>(
      `${baseURL}/v1/organization/application/${uuid}`
    )
  },
}

export default jobSeekerManager
