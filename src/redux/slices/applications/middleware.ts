import { ModalName } from '@allTypes/modals'
import {
  IDeactivateApplicationProps,
  IJobSeekerApplicationProps,
  IOrganizationApplicationProps,
} from '@allTypes/reduxTypes/areaSpecializationTypes'
import API from '@axios/API'
import { viewsMiddleware } from '@redux/slices/views'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setJobSeekerLoading,
  setJobSeekerSubmitSuccess,
  setApplicationsList,
  setApplicationsLoading,
  setIndividualApplication,
  setOrganizationLoading,
  setOrganizationSubmitSuccess,
  setChangeIsActiveSuccess,
  setOrganizationApplicationDeleteLoading,
  setJobSeekerApplicationDeleteLoading,
  setOrganizationApplicationLoading,
  setJobSeekerApplicationLoading,
  setCloneSubmitSuccess,
} = slice.actions

const jobSeeker = (params: IJobSeekerApplicationProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setJobSeekerLoading(true))
    await API.jobSeeker.createApplication(params)

    dispatch(setJobSeekerSubmitSuccess(true))
  } catch (error) {
    /* empty */
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
    /* empty */
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
    /* empty */
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}

const deleteJobSeekerApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setJobSeekerApplicationDeleteLoading(true))

    await API.jobSeeker.deleteJobSeekerApplication(uuid)

    const response = await API.jobSeeker.getJobSeekerApplication()

    dispatch(setApplicationsList(response?.data?.data))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setJobSeekerApplicationDeleteLoading(false))
  }
}

const getJobSeekerIndividualApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setJobSeekerApplicationLoading(true))

    const response = await API.jobSeeker.getJobSeekerIndividualApplication(uuid)

    dispatch(setIndividualApplication(response?.data?.data))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setJobSeekerApplicationLoading(false))
  }
}

const upDateJobSeekerIndividualApplication =
  (params: IOrganizationApplicationProps) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setOrganizationLoading(true))
      await API.jobSeeker.upDateJobSeekerIndividualApplication(params)

      dispatch(setJobSeekerSubmitSuccess(true))
    } catch (error) {
      /* empty */
    } finally {
      dispatch(setOrganizationLoading(false))
    }
  }

const getOrganizationApplication = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setApplicationsLoading(true))

    const response = await API.jobSeeker.getOrganizationApplication()

    dispatch(setApplicationsList(response?.data?.data))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}

const getOrganizationIndividualApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setOrganizationApplicationLoading(true))

    const response = await API.jobSeeker.getOrganizationIndividualApplication(uuid)

    dispatch(setIndividualApplication(response?.data?.data))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setOrganizationApplicationLoading(false))
  }
}

const upDateOrganizationIndividualApplication =
  (params: IOrganizationApplicationProps) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setOrganizationLoading(true))
      await API.jobSeeker.updateOrganizationIndividualApplication(params)

      dispatch(setJobSeekerSubmitSuccess(true))
    } catch (error) {
      /* empty */
    } finally {
      dispatch(setOrganizationLoading(false))
    }
  }

const deleteOrganizationApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setOrganizationApplicationDeleteLoading(true))

    await API.jobSeeker.deleteOrganizationApplication(uuid)
    dispatch(viewsMiddleware.closeModal(ModalName.DeleteApplicationModal))

    dispatch(getOrganizationApplication())
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setOrganizationApplicationDeleteLoading(false))
  }
}

const resetOrganizationSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setJobSeekerSubmitSuccess(false))
}

const getJobSeekerApplicationsPdf = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await API.jobSeeker.getJobSeekerApplicationsPdf(uuid)

    const blobPart: BlobPart = response?.data

    const blob = await new Blob([blobPart], { type: 'application/pdf' })

    const downloadUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = downloadUrl
    link.download = 'file.pdf'
    document.body.appendChild(link)
    link.click()

    if (link.parentNode) {
      link?.parentNode?.removeChild(link)
    }
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  }
}

const upDateJobSeekerApplicationIsActive =
  (params: IDeactivateApplicationProps) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setChangeIsActiveSuccess(true))

      await API.jobSeeker.upDateJobSeekerApplicationIsActive(params)
    } catch (error) {
      dispatch(setError((error as IError).response?.data?.status.message))
    } finally {
      dispatch(setApplicationsLoading(false))
    }
  }

const upDateOrganizationApplicationIsActive =
  (params: IDeactivateApplicationProps) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setChangeIsActiveSuccess(true))

      await API.jobSeeker.upDateOrganizationApplicationIsActive(params)
    } catch (error) {
      dispatch(setError((error as IError).response?.data?.status.message))
    } finally {
      dispatch(setApplicationsLoading(false))
    }
  }

const cloneJobSeekerApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setCloneSubmitSuccess(true))

    await API.jobSeeker.cloneJobSeekerApplication(uuid)
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}
const cloneOrganizationApplication = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setCloneSubmitSuccess(true))

    await API.jobSeeker.cloneOrganizationApplication(uuid)
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setApplicationsLoading(false))
  }
}

const resetJobSeekerSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setJobSeekerSubmitSuccess(false))
}

const resetChangeIsActiveSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setChangeIsActiveSuccess(false))
}

const resetCloneSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setCloneSubmitSuccess(false))
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
  getJobSeekerApplicationsPdf,
  upDateJobSeekerApplicationIsActive,
  upDateOrganizationApplicationIsActive,
  resetChangeIsActiveSuccess,
  cloneJobSeekerApplication,
  cloneOrganizationApplication,
  resetCloneSubmitSuccess,
}
