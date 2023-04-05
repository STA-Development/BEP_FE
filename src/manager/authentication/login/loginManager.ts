import { ILoginListParams, ILoginResponse } from '@axios/authentication/login/managerLoginTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const baseURL = '/users'

const axiosInstance = Axios()
const loginManager = {
  axiosInstance,
  login(params: ILoginListParams) {
    return axiosInstance.post<ILoginResponse, IAxiosResponse>(`${baseURL}/v1/auth/login`, params)
  },
}

export default loginManager
