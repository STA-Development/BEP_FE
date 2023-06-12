import API from '@axios/API'
import {
  IChangeEducationalInstituteFormDataProps,
  ICreateEducationalInstituteFormDataProps,
  IEducationalInstitutesParams,
  IFilters,
} from '@axios/educational-institutes/edInstitutesManagerTypes'
import { educationalInstitutesMiddleware } from '@redux/slices/educational-instutions/index'
import store, { AppDispatch } from '@redux/store'

import slice from './slice'

const {
  setTotalItems,
  setPageSize,
  setEducationalInstitutesList,
  setIndividualEducationalInstitute,
  setFilters,
  setIndividualInstitutesLoadingState,
  setEducationalInstituteListLoading,
  setProvinces,
  setCreateIndividualInstitutes,
  setChangeIndividualInstitutes,
} = slice.actions

const getEducationalInstitutes =
  (params: IEducationalInstitutesParams) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setEducationalInstituteListLoading(true))

      const response = await API.educationalInstitutes.educationalInstitutes(params)
      const responseData = response.data
      const { edInstitutesList } = store.getState().educationalInstitutes.edInstitute

      dispatch(setEducationalInstitutesList([...edInstitutesList, ...responseData.data]))
      dispatch(setTotalItems(responseData.totalItems))
      dispatch(setPageSize(responseData.pageSize))
    } catch (error) {
      /* empty */
    } finally {
      dispatch(setEducationalInstituteListLoading(false))
    }
  }

const getProvince = () => async (dispatch: AppDispatch) => {
  try {
    const response = await API.educationalInstitutes.getProvinces()

    dispatch(setProvinces(response.data.data))
  } catch (error) {
    /* empty */
  }
}

const setEIFilters =
  (filters: { page?: number; filters?: IFilters[] }) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setFilters(filters))
    } catch (error) {
      /* empty */
    }
  }

const getIndividualEducationalInstitutesById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIndividualInstitutesLoadingState(true))

    const response = await API.educationalInstitutes.getIndividualEducationalInstitutes(id)

    dispatch(setIndividualEducationalInstitute(response.data.data))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setIndividualInstitutesLoadingState(false))
  }
}

const clearInstitutesList = () => async (dispatch: AppDispatch) => {
  try {
    const filters = {
      page: 1,
      filters: [],
    }

    dispatch(setEducationalInstitutesList([]))
    dispatch(setTotalItems(0))
    dispatch(setPageSize(0))
    dispatch(setFilters(filters))
  } catch (error) {
    /* empty */
  }
}

const createEducationalInstitutes =
  (formData: ICreateEducationalInstituteFormDataProps) => async (dispatch: AppDispatch) => {
    try {
      await API.educationalInstitutes.createEducationalInstitute(formData)
      dispatch(setCreateIndividualInstitutes(true))

      dispatch(educationalInstitutesMiddleware.clearInstitutesList())
    } catch (error) {
      /* empty */
    }
  }

const deleteEducationalInstitute = (uuid: string) => async (dispatch: AppDispatch) => {
  try {
    await API.educationalInstitutes.deleteEducationalInstitute(uuid)

    const filters = {
      page: 1,
      filters: [],
    }

    dispatch(educationalInstitutesMiddleware.clearInstitutesList())
    dispatch(educationalInstitutesMiddleware.getEducationalInstitutes(filters))
  } catch (error) {
    /* empty */
  }
}

const resetCreateIndividualInstitutesSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setCreateIndividualInstitutes(false))
}

const changeEducationalInstitutes =
  (formData: IChangeEducationalInstituteFormDataProps) => async (dispatch: AppDispatch) => {
    try {
      await API.educationalInstitutes.changeEducationalInstitute(formData)

      dispatch(setChangeIndividualInstitutes(true))
    } catch (error) {
      /* empty */
    }
  }

const resetChangeIndividualInstitutesSuccess = () => (dispatch: AppDispatch) => {
  dispatch(setChangeIndividualInstitutes(false))
}

export default {
  getEducationalInstitutes,
  getProvince,
  clearInstitutesList,
  setEIFilters,
  getIndividualEducationalInstitutesById,
  createEducationalInstitutes,
  resetCreateIndividualInstitutesSuccess,
  deleteEducationalInstitute,
  changeEducationalInstitutes,
  resetChangeIndividualInstitutesSuccess,
}
