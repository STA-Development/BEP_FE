import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse, IAxiosResponsePaginated } from '@axios/axiosTypes'
import { EducationalInstitutesPageParam } from '@axios/core/educational-institutes/educational-institutesManagerTypes'
import {
  IEdInstitutesResponse,
  IIndividualEducationalInstituteResponse,
} from '@axios/educational-institutes/edInstitutesManagerTypes'

const axiosInstance = Axios()
const educationalInstitutesManager = {
  axiosInstance,
  educationalInstitutes(params: EducationalInstitutesPageParam) {
    return axiosInstance.get<
      EducationalInstitutesPageParam,
      IAxiosResponsePaginated<IEdInstitutesResponse[]>
    >(`educational-institution`, { params })
  },
  getIndividualEducationalInstitutes(id: string) {
    return axiosInstance.get<
      IIndividualEducationalInstituteResponse,
      IAxiosResponse<IIndividualEducationalInstituteResponse>
    >(`educational-institution/${id}`)
  },
}

export default educationalInstitutesManager
