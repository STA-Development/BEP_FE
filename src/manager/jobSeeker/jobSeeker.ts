import {
  IApplicationsListProps,
  IDeactivateApplicationProps,
  IIndividualApplication,
  IJobSeekerApplicationProps,
  IJobSeekerProps,
  INotificationsProps,
  IOrganizationApplicationProps,
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

  updateJobSeekerProfile(data: IProfileUpdateProps) {
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
  updateOrganizationProfile(data: IProfileUpdateProps) {
    return axiosInstance.patch<null, IAxiosResponse<null>>(`${baseURL}/v1/organization`, data)
  },

  getJobSeekerApplicationsPdf(uuid: string) {
    return axiosInstance.get<BlobPart>(`${baseURL}/v1/job-seeker/pdf/${uuid}`, {
      headers: {
        'Content-Type': 'application/pdf',
      },
      responseType: 'blob',
    })
  },
  upDateJobSeekerApplicationIsActive(params: IDeactivateApplicationProps) {
    return axiosInstance.patch<boolean, IAxiosResponse<boolean>>(
      `${baseURL}/v1/job-seeker/application/deactivate/${params.uuid}`,
      {
        isActive: params.isActive,
      }
    )
  },
  upDateOrganizationApplicationIsActive(params: IDeactivateApplicationProps) {
    return axiosInstance.patch<boolean, IAxiosResponse<boolean>>(
      `${baseURL}/v1/organization/application/deactivate/${params.uuid}`,
      {
        isActive: params.isActive,
      }
    )
  },
  cloneJobSeekerApplication(uuid: string) {
    return axiosInstance.post<null, IAxiosResponse<null>>(
      `${baseURL}/v1/job-seeker/application/clone/${uuid}`
    )
  },
  cloneOrganizationApplication(uuid: string) {
    return axiosInstance.post<null, IAxiosResponse<null>>(
      `${baseURL}/v1/organization/application/clone/${uuid}`
    )
  },

  getJobSeekerNotifications() {
    return axiosInstance.get<INotificationsProps[], IAxiosResponse<INotificationsProps[]>>(
      `${baseURL}/v1/job-seeker/notification`
    )
  },
  getOrganizationNotifications() {
    return axiosInstance.get<INotificationsProps[], IAxiosResponse<INotificationsProps[]>>(
      `${baseURL}/v1/organization/notification`
    )
  },
}

export default jobSeekerManager
