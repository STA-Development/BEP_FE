import { ICreateTeamMember } from '@allTypes/reduxTypes/aboutUsStateTypes'
import API from '@axios/API'
import { aboutUsMiddleware } from '@redux/slices/aboutUs/index'
import { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setAboutLoading,
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
    /* empty */
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
    /* empty */
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
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setIndividualMemberLoading(false))
  }
}

const deleteTeamMember = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setAboutLoading(true))

    await API.aboutUs.deleteTeamMember(id)

    const response = await API.aboutUs.getAboutUs()

    dispatch(setAboutList(response.data.data))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setAboutLoading(false))
  }
}

export default {
  getAboutUsList,
  createTeamMember,
  resetCreateTeamMemberSubmitSuccess,
  getIndividualMemberById,
  deleteTeamMember,
}
