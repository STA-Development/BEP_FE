import {
  IForgotPasswordResponse,
  IResetPasswordParams,
  ISignInParams,
  ISignInResponse,
  ISignUpParams,
  IVerifyOtpResponse,
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
    // TODO: use env variables for this call
    return axiosInstance.get<null, IAxiosResponse<null>>(
      `http://localhost:2002/users/v1/auth/google`
    )
  },
}

export default authManager
