import { IContactUsProps, IHelpDataProps } from '@allTypes/reduxTypes/supportStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const helpURL = 'help'
const contactUsURL = 'contact-us'

const axiosInstance = Axios()
const supportManager = {
  axiosInstance,
  sendHelpData(helpData: IHelpDataProps) {
    return axiosInstance.post<IHelpDataProps, IAxiosResponse<IHelpDataProps>>(
      `/core/v1/${helpURL}`,
      {
        ...helpData,
      }
    )
  },
  sendContactUsData(contactUsData: IContactUsProps) {
    return axiosInstance.post<IContactUsProps, IAxiosResponse<IHelpDataProps>>(
      `/core/v1/${contactUsURL}`,
      {
        ...contactUsData,
      }
    )
  },
}

export default supportManager
