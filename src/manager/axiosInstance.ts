import { devToolsDefaultConfig } from '@constants/defaultConfigs'
import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

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

      // TODO: update this after login endpoint integration
      const idToken = localStorage.getItem('accessToken')

      // Put all headers here
      requestConfig.headers.set({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: idToken,
      })

      return requestConfig
    })

    RequestManager.instance = axiosInstance

    return axiosInstance
  }
}

export const Axios = () => RequestManager.getCreateInstance()
