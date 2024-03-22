import { IFilterUserListProps, IUsersList } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import {
  IForgotPasswordResponse,
  IProfile,
  IResetPasswordParams,
  ISignInParams,
  ISignInResponse,
  ISignUpParams,
  IVerifyOtpResponse,
} from '@axios/authentication/authManagerTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse, IAxiosResponsePaginated } from '@axios/axiosTypes'

import { getEnvironmentVariables } from '@utils/getEnvironmentVariables'

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
  verifyOtp(params: IResetPasswordParams) {
    return axiosInstance.post<IVerifyOtpResponse, IAxiosResponse<IVerifyOtpResponse>>(
      `${baseURL}/v1/auth/verify-otp`,
      params
    )
  },
  forgotPassword(params: IResetPasswordParams) {
    return axiosInstance.post<IForgotPasswordResponse, IAxiosResponse<IForgotPasswordResponse>>(
      `${baseURL}/v1/auth/forgot-password`,
      params
    )
  },
  resetPassword(params: IResetPasswordParams) {
    return axiosInstance.post<null, IAxiosResponse<null>>(
      `${baseURL}/v1/auth/reset-password`,
      params
    )
  },
  googleSignIn() {
    const { NEXT_PUBLIC_BASE_URL } = getEnvironmentVariables()

    return window.open(`${NEXT_PUBLIC_BASE_URL}/users/v1/auth/google`)
  },

  getAccessToken(refreshToken: string) {
    return axiosInstance.post<ISignInResponse, IAxiosResponse<ISignInResponse>>(
      `${baseURL}/v1/auth/refresh-token`,
      { refreshToken, remember: true }
    )
  },
  selectRole(role: keyof typeof Roles) {
    return axiosInstance.post<null, IAxiosResponse<null>>(`${baseURL}/v1/auth/user`, { role })
  },
  getProfile() {
    return axiosInstance.get<IProfile, IAxiosResponse<IProfile>>(`${baseURL}/v1/auth/profile`)
  },
  uploadAvatar(data: FormData) {
    return axiosInstance.post<null, IAxiosResponse<null>>(`${baseURL}/v1/user/image`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  getUsersList(params: IFilterUserListProps) {
    return axiosInstance.post<IUsersList, IAxiosResponsePaginated<IUsersList[]>>(
      `${baseURL}/v1/user`,
      {
        page: params.page,
        ...(params.value
          ? {
              filters: [
                {
                  key: params.key,
                  value: params.value,
                },
              ],
            }
          : {}),
      }
    )
  },
  deactivateUser(uuid: string) {
    return axiosInstance.patch<null, IAxiosResponse<null>>(`${baseURL}/v1/admin/deactivate/${uuid}`)
  },
  activateUser(uuid: string) {
    return axiosInstance.patch<null, IAxiosResponse<null>>(`${baseURL}/v1/admin/activate/${uuid}`)
  },
}

export default authManager
