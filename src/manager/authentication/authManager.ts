import { IkeyValuePairProps, IProfileProps } from '@allTypes/reduxTypes/usersStateTypes'
import {
  IProfileDataProps,
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
  uploadImage(image: File) {
    return axiosInstance.post<File, IAxiosResponse<File>>(
      `${baseURL}/v1/user/image`,
      {
        image,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  },
  profile() {
    return axiosInstance.get<IProfileDataProps, IAxiosResponse<IProfileDataProps>>(
      `${baseURL}/v1/auth/profile`
    )
  },
  getJobSeeker() {
    return axiosInstance.get<IProfileProps, IAxiosResponse<IProfileProps>>(
      `${baseURL}/v1/job-seeker`
    )
  },
  Organization() {
    return axiosInstance.get<IProfileProps, IAxiosResponse<IProfileProps>>(
      `${baseURL}/v1/organization`
    )
  },
  jobSeekerChangeInfo(keyValuePair: IkeyValuePairProps) {
    return axiosInstance.patch<IkeyValuePairProps, IAxiosResponse<IkeyValuePairProps>>(
      `${baseURL}/v1/job-seeker`,
      {
        keyValuePair,
      }
    )
  },
  organizationChangeInfo(keyValuePair: IkeyValuePairProps) {
    return axiosInstance.patch<IkeyValuePairProps, IAxiosResponse<IkeyValuePairProps>>(
      `${baseURL}/v1/organization`,
      {
        keyValuePair,
      }
    )
  },
}

export default authManager
