import { IContactUsProps, IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const helpURL = 'help'
const contactUsURL = 'contact-us'

const axiosInstance = Axios()
const supportManager = {
  axiosInstance,
  sendHelpData(message: IHelpDataProps) {
    return axiosInstance.post<IHelpDataProps, IAxiosResponse<IHelpDataProps>>(`${helpURL}`, {
      ...message,
    })
  },
  sendContactUsData(message: IContactUsProps) {
    return axiosInstance.post<IContactUsProps, IAxiosResponse<IHelpDataProps>>(
      `/core/v1/${contactUsURL}`,
      {
        ...message,
      }
    )
  },
}

export default supportManager
