import API from '@axios/API'
import {
  IEducationalInstitutesParams,
  IFilters,
} from '@axios/educational-institutes/edInstitutesManagerTypes'
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
    dispatch(setEducationalInstitutesList([]))
  } catch (error) {
    /* empty */
  }
}

export default {
  getEducationalInstitutes,
  getProvince,
  clearInstitutesList,
  setEIFilters,
  getIndividualEducationalInstitutesById,
}
