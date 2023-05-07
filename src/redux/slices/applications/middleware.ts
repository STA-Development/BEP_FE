import { IJobSeekerProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setJobSeekerLoading, setError, setJobSeekerSubmitSuccess } = slice.actions

const jobSeeker = (params: IJobSeekerProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setJobSeekerLoading(true))
    await API.applications.jobSeeker(params)

    dispatch(setJobSeekerSubmitSuccess(true))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setJobSeekerLoading(false))
  }
}

const resetJobSeekerSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setJobSeekerSubmitSuccess(false))
}

export default {
  jobSeeker,
  resetJobSeekerSubmitSuccess,
}