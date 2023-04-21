import { IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const baseURL = 'help'

const axiosInstance = Axios()
const supportManager = {
  axiosInstance,
  sendHelpData(message: IHelpDataProps) {
    return axiosInstance.post<IHelpDataProps, IAxiosResponse<IHelpDataProps>>(`${baseURL}`, {
      ...message,
    })
  },
}

export default supportManager
