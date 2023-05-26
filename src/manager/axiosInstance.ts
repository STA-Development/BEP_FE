import { ErrorMessages } from '@axios/axiosTypes'
import { devToolsDefaultConfig } from '@constants/defaultConfigs'
import { dispatch } from '@redux/hooks'
import { usersMiddleware } from '@redux/slices/users'
import { viewsMiddleware } from '@redux/slices/views'
import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const getServerUrl = () => devToolsDefaultConfig?.server

class RequestManager {
  private static instance: AxiosInstance

  static getCreateInstance(): AxiosInstance {
    if (RequestManager.instance) {
      return RequestManager.instance
    }

    const serverUrl = getServerUrl()
    const axiosInstance = axios.create({ baseURL: `${serverUrl}` })

    axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
      const requestConfig = config

      const idToken = localStorage.getItem('accessToken')

      if (!requestConfig.headers.has('Content-Type')) {
        requestConfig.headers.set({
          'Content-Type': 'application/json',
        })
      }

      requestConfig.headers.set({
        Accept: 'application/json',
        Authorization: `Bearer ${idToken}`,
      })

      return requestConfig
    })

    axiosInstance.interceptors.response.use(
      async (res: AxiosResponse) => res,
      (error) => {
        if (
          error.response.status === 403 &&
          error.message === ErrorMessages.AccessTokenExpiryErrorMessage
        ) {
          const refreshToken = localStorage.getItem('refreshToken')

          if (refreshToken) {
            dispatch(usersMiddleware.getAccessTokenWithRefreshToken({ refreshToken }))

            const originalRequest = error.config

            axiosInstance.request(originalRequest).then(() => ({
              headers: {
                ...originalRequest.headers,
                Authorization: `Bearer ${usersMiddleware.getAccessTokenWithRefreshToken({
                  refreshToken,
                })}`,
              },
            }))
          } else {
            dispatch(
              viewsMiddleware.setRedirectionState({ path: '/login', params: '', apply: true })
            )
          }
        }
      }
    )

    RequestManager.instance = axiosInstance

    return axiosInstance
  }
}

export const Axios = () => RequestManager.getCreateInstance()
