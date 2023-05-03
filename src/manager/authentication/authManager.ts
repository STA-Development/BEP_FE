import {
  IGetProfileResponse,
  IRefreshTokenParams,
  IRefreshTokenResponse,
  IRoleParams,
  ISignInParams,
  ISignInResponse,
  ISignUpParams,
} from '@axios/authentication/authManagerTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'
import { AxiosRequestConfig } from 'axios'

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
  refreshToken(params: IRefreshTokenParams) {
    return axiosInstance.post<IRefreshTokenResponse, IAxiosResponse<IRefreshTokenResponse>>(
      `${baseURL}/v1/auth/refresh-token`,
      params
    )
  },
  selectRole(params: IRoleParams) {
    return axiosInstance.post<null, IAxiosResponse<null>>(`${baseURL}/v1/auth/role`, params)
  },
  getProfile() {
    return axiosInstance.get<IGetProfileResponse, IAxiosResponse<IGetProfileResponse>>(
      `${baseURL}/v1/auth/profile`
    )
  },
  uploadAvatar(formData: FormData) {
    const options: AxiosRequestConfig = {
      headers: { 'Content-Type': 'multipart/form-data' },
    }

    return axiosInstance.post<null, IAxiosResponse<null>>(
      `${baseURL}/v1/user/image`,
      formData,
      options
    )
  },
}

export default authManager
