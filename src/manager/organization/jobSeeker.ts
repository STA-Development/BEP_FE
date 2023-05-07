import { IOrganizationProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const baseURL = '/users'

const axiosInstance = Axios()
const organizationManager = {
  axiosInstance,
  getOrganization() {
    return axiosInstance.get<IOrganizationProps, IAxiosResponse<IOrganizationProps>>(
      `${baseURL}/v1/organization`
    )
  },
}

export default organizationManager
