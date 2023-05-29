import { ICreateTeamMember } from '@allTypes/reduxTypes/aboutUsStateTypes'
import API from '@axios/API'
import { IError } from '@axios/authentication/authManagerTypes'
import { aboutUsMiddleware } from '@redux/slices/aboutUs/index'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setAboutLoading,
  setError,
  setAboutList,
  setCreateTeamMemberSubmitSuccess,
  setIndividualMemberLoading,
  setIndividualMember,
} = slice.actions

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

    dispatch(aboutUsMiddleware.getAboutUsList())
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status?.message))
  }
}

const resetCreateTeamMemberSubmitSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setCreateTeamMemberSubmitSuccess(false))
}

const getIndividualMemberById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIndividualMemberLoading(true))

    const response = await API.aboutUs.getIndividualMemberById(id)

    dispatch(setIndividualMember(response.data.data))

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response?.data?.status?.message))
  } finally {
    dispatch(setIndividualMemberLoading(false))
  }
}

export default {
  getAboutUsList,
  createTeamMember,
  resetCreateTeamMemberSubmitSuccess,
  getIndividualMemberById,
}
