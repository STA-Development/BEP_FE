import {
  ISignInParams,
  ISignInResponse,
  ISignUpParams,
} from '@axios/authentication/authManagerTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const baseURL = '/users'

const axiosInstance = Axios()
const authManager = {
  axiosInstance,
  signIn(params: ISignInParams) {
    return axiosInstance.post<ISignInResponse, IAxiosResponse<ISignInResponse>>(
      `${baseURL}/v1/auth/login`,
      params
    )
  },
  signUp(params: ISignUpParams) {
    return axiosInstance.post<null, IAxiosResponse<null>>(`${baseURL}/v1/auth/register`, params)
  },
  googleSignIn() {
    return axiosInstance.post<null, IAxiosResponse<null>>(`${baseURL}/v1/auth/google`)
  },
}

export default authManager
