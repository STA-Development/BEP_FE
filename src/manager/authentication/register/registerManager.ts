import {
  IRegisterListParams,
  IRegisterResponse,
} from '@axios/authentication/register/registerLoginTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const baseURL = '/users'

const axiosInstance = Axios()
const registerManager = {
  axiosInstance,
  register(params: IRegisterListParams) {
    return axiosInstance.post<IRegisterResponse, IAxiosResponse>(
      `${baseURL}/v1/auth/register`,
      params
    )
  },
}

export default registerManager
