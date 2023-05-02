import { IJobSeekerProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Axios } from '@axios/axiosInstance'
import { IAxiosResponse } from '@axios/axiosTypes'

const axiosInstance = Axios()
const jobSeekerManager = {
  axiosInstance,
  jobSeeker(data: IJobSeekerProps) {
    return axiosInstance.post<IJobSeekerProps, IAxiosResponse<IJobSeekerProps>>(
      `users/v1/job-seeker/application`,
      {
        ...data,
      }
    )
  },
}

export default jobSeekerManager
