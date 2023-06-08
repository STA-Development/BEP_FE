import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse, IAxiosResponsePaginated } from '@axios/axiosTypes'
import {
  EducationalInstitutesPageParam,
  IChangeEducationalInstituteFormDataProps,
  ICreateEducationalInstituteFormDataProps,
  IEdInstitutesResponse,
  IIndividualEducationalInstituteResponse,
  IProvinces,
} from '@axios/educational-institutes/edInstitutesManagerTypes'

const baseURL = 'educational-institution'

const axiosInstance = Axios()
const educationalInstitutesManager = {
  axiosInstance,
  educationalInstitutes(params: EducationalInstitutesPageParam) {
    return axiosInstance.post<
      EducationalInstitutesPageParam,
      IAxiosResponsePaginated<IEdInstitutesResponse[]>
    >(`/core/v1/${baseURL}/filters`, { ...params })
  },
  getIndividualEducationalInstitutes(id: string) {
    return axiosInstance.get<
      IIndividualEducationalInstituteResponse,
      IAxiosResponse<IIndividualEducationalInstituteResponse>
    >(`/core/v1/${baseURL}/${id}`)
  },
  getProvinces() {
    return axiosInstance.get<IProvinces, IAxiosResponse<IProvinces>>(`/core/v1/${baseURL}/province`)
  },
  createEducationalInstitute(formData: ICreateEducationalInstituteFormDataProps) {
    return axiosInstance.post<
      ICreateEducationalInstituteFormDataProps,
      IAxiosResponse<ICreateEducationalInstituteFormDataProps>
    >(
      `/core/v1/${baseURL}`,
      {
        ...formData,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  },

  deleteEducationalInstitute(uuid: string) {
    return axiosInstance.delete<string, IAxiosResponse<string>>(`/core/v1/${baseURL}/${uuid}`)
  },

  changeEducationalInstitute(formData: IChangeEducationalInstituteFormDataProps) {
    return axiosInstance.patch<
      IChangeEducationalInstituteFormDataProps,
      IAxiosResponse<IChangeEducationalInstituteFormDataProps>
    >(
      `/core/v1/${baseURL}/${formData.uuid}`,
      {
        ...formData,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
  },
}

export default educationalInstitutesManager
