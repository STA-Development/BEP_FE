import { IJobSeekerProps, IOrganizationProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setJobSeekerLoading,
  setError,
  setJobSeekerSubmitSuccess,
  setOrganizationLoading,
  setOrganizationSubmitSuccess,
} = slice.actions

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

const organization = (params: IOrganizationProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setOrganizationLoading(true))
    await API.applications.organization(params)

    dispatch(setOrganizationSubmitSuccess(true))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setOrganizationLoading(false))
  }
}

const resetJobSeekerSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setOrganizationSubmitSuccess(false))
}

const resetOrganizationSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setJobSeekerSubmitSuccess(false))
}

export default {
  jobSeeker,
  organization,
  resetJobSeekerSubmitSuccess,
  resetOrganizationSubmitSuccess,
}
