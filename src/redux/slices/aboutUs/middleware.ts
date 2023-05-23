import { ICreateTeamMember } from '@allTypes/reduxTypes/aboutUsStateTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const { setAboutLoading, setError, setAboutList, setCreateTeamMemberSubmitSuccess } = slice.actions

const getAboutUsList = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setAboutLoading(true))

    const response = await API.aboutUs.getAboutUs()

    const responseData = response.data

    dispatch(setAboutList(responseData.data))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status.message))
  } finally {
    dispatch(setAboutLoading(false))
  }
}

const createTeamMember = (formData: ICreateTeamMember) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setCreateTeamMemberSubmitSuccess(true))

    await API.aboutUs.createTeamMember(formData)

    await dispatch(getAboutUsList())
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status?.message))
  }
}

const resetCreateTeamMemberSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setCreateTeamMemberSubmitSuccess(false))
}

export default {
  getAboutUsList,
  createTeamMember,
  resetCreateTeamMemberSubmitSuccess,
}
