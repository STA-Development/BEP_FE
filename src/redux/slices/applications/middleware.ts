import {
  IJobSeekerApplicationProps,
  IOrganizationApplicationProps,
} from '@allTypes/reduxTypes/areaSpecializationTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setJobSeekerLoading,
  setError,
  setJobSeekerSubmitSuccess,
  setApplicationsList,
  setApplicationsLoading,
  setIndividualApplication,
  setOrganizationLoading,
  setOrganizationSubmitSuccess,
} = slice.actions

const jobSeeker = (params: IJobSeekerApplicationProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setJobSeekerLoading(true))
    await API.jobSeeker.createApplication(params)

    dispatch(setJobSeekerSubmitSuccess(true))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setJobSeekerLoading(false))
  }
}

const organization = (params: IOrganizationApplicationProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setOrganizationLoading(true))
    await API.jobSeeker.organization(params)

    dispatch(setOrganizationSubmitSuccess(true))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setOrganizationLoading(false))
  }
}

const getJobSeekerApplication = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setApplicationsLoading(true))

    const response = await API.jobSeeker.getJobSeekerApplication()

    dispatch(setApplicationsList(response?.data?.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}

const deleteJobSeekerApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setApplicationsLoading(true))

    await API.jobSeeker.deleteJobSeekerApplication(uuid)

    const response = await API.jobSeeker.getJobSeekerApplication()

    dispatch(setApplicationsList(response?.data?.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}

const getJobSeekerIndividualApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setApplicationsLoading(true))

    const response = await API.jobSeeker.getJobSeekerIndividualApplication(uuid)

    dispatch(setIndividualApplication(response?.data?.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}

const upDateJobSeekerIndividualApplication =
  (params: IOrganizationApplicationProps) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setOrganizationLoading(true))
      await API.jobSeeker.upDateJobSeekerIndividualApplication(params)

      dispatch(setOrganizationSubmitSuccess(true))
    } catch (error) {
      dispatch(setError((error as IError).response?.data?.status.message))
    } finally {
      dispatch(setOrganizationLoading(false))
    }
  }

const resetJobSeekerSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setJobSeekerSubmitSuccess(false))
}

const getOrganizationApplication = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setApplicationsLoading(true))

    const response = await API.jobSeeker.getOrganizationApplication()

    dispatch(setApplicationsList(response?.data?.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}

const getOrganizationIndividualApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setApplicationsLoading(true))

    const response = await API.jobSeeker.getOrganizationIndividualApplication(uuid)

    dispatch(setIndividualApplication(response?.data?.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}

const upDateOrganizationIndividualApplication =
  (params: IOrganizationApplicationProps) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setOrganizationLoading(true))
      await API.jobSeeker.updateOrganizationIndividualApplication(params)

      dispatch(setOrganizationSubmitSuccess(true))
    } catch (error) {
      dispatch(setError((error as IError).response?.data?.status.message))
    } finally {
      dispatch(setOrganizationLoading(false))
    }
  }

const deleteOrganizationApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setApplicationsLoading(true))

    await API.jobSeeker.deleteOrganizationApplication(uuid)

    const response = await API.jobSeeker.getOrganizationApplication()

    dispatch(setApplicationsList(response?.data?.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}

const resetOrganizationSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setJobSeekerSubmitSuccess(false))
}

export default {
  jobSeeker,
  resetJobSeekerSubmitSuccess,
  getJobSeekerApplication,
  deleteJobSeekerApplication,
  getJobSeekerIndividualApplication,
  getOrganizationApplication,
  getOrganizationIndividualApplication,
  organization,
  resetOrganizationSubmitSuccess,
  deleteOrganizationApplication,
  upDateOrganizationIndividualApplication,
  upDateJobSeekerIndividualApplication,
}
