import { IRefreshTokenResponse } from '@axios/authentication/authManagerTypes'
import { IAxiosResponse } from '@axios/axiosTypes'
import { devToolsDefaultConfig } from '@constants/defaultConfigs'
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

class RequestManager {
  private static instance: AxiosInstance

  static getCreateInstance(): AxiosInstance {
    if (RequestManager.instance) {
      return RequestManager.instance
    }

    const axiosInstance = axios.create({ baseURL: devToolsDefaultConfig?.server })

    axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
      const requestConfig = config

      const token = localStorage.getItem('accessToken')

      requestConfig.headers = requestConfig.headers || {}
      requestConfig.headers.Authorization = `Bearer ${token}`
      requestConfig.headers['Content-Type'] =
        config.headers['Content-Type'] === 'multipart/form-data'
          ? 'multipart/form-data'
          : 'application/json'
      requestConfig.headers.Accept = 'application/json'

      return requestConfig
    })

    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config

        if (error.response.status === 403 && !originalRequest._retry) {
          originalRequest._retry = true

          const refreshToken = localStorage.getItem('accessToken')
          const token = await axiosInstance.post<
            IRefreshTokenResponse,
            IAxiosResponse<IRefreshTokenResponse>
          >(`/users/v1/auth/refresh-token`, { refreshToken, remember: true })

          console.log({ token })

          axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`

          return axiosInstance(originalRequest)
        }

        return Promise.reject(error)
      }
    )

    RequestManager.instance = axiosInstance

    return axiosInstance
  }
}

export const Axios = () => RequestManager.getCreateInstance()
