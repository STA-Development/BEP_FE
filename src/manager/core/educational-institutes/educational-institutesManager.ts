import { Axios } from '@axios/axiosInstance'
import { IAxiosResponsePaginated } from '@axios/axiosTypes'
import { EducationalInstitutesPageParam } from '@axios/core/educational-institutes/educational-institutesManagerTypes'
import { IEdInstitutesResponse } from '@axios/educational-institutes/edInstitutesManagerTypes'

const axiosInstance = Axios()
const educationalInstitutesManager = {
  axiosInstance,
  educationalInstitutes(params: EducationalInstitutesPageParam) {
    return axiosInstance.get<
      EducationalInstitutesPageParam,
      IAxiosResponsePaginated<IEdInstitutesResponse[]>
    >(`educational-institution`, { params })
  },
}

export default educationalInstitutesManager
