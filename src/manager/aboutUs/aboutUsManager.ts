import { IAboutUsListProps, ICreateTeamMember } from '@allTypes/reduxTypes/aboutUsStateTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const baseURL = 'about-us'

const axiosInstance = Axios()
const aboutUsManager = {
  axiosInstance,
  getAboutUs() {
    return axiosInstance.get<IAboutUsListProps, IAxiosResponse<IAboutUsListProps[]>>(
      `/core/v1/${baseURL}`
    )
  },
  createTeamMember(data: ICreateTeamMember) {
    return axiosInstance.post<ICreateTeamMember, IAxiosResponse<ICreateTeamMember>>(
      `/core/v1/${baseURL}`,
      {
        ...data,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  },
}

export default aboutUsManager
