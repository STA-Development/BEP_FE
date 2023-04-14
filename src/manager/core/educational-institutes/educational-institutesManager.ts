import { Axios } from '@axios/axiosInstance'
import { EducationalInstitutesParams } from '@axios/core/educational-institutes/educational-institutesManagerTypes'

const baseURL = '/core'

const axiosInstance = Axios()
const educationalInstitutesManager = {
  axiosInstance,
  educationalInstitutes(params: EducationalInstitutesParams) {
    return axiosInstance.post(`${baseURL}/educational-institutes`, params)
  },
}

export default educationalInstitutesManager
