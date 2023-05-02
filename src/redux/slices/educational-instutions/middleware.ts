import { RedirectionProps } from '@allTypes/reduxTypes/viewsStateTypes'
import API from '@axios/API'
import store, { AppDispatch } from '@redux/store'

// import { IError } from '../../../manager/authentication/authManagerTypes'
import slice from './slice'

const {
  setTotalItems,
  setPageSize,
  setEducationalInstitutesList,
  setError,
  setRedirection,
  setIndividualEducationalInstitute,
  setEducationalInstituteListLoading,
} = slice.actions

const setRedirectionState = (value: RedirectionProps) => (dispatch: AppDispatch) => {
  dispatch(setRedirection(value))
}

export const getEducationalInstitutes = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setEducationalInstituteListLoading(true))

    const reqBody = {
      page,
    }

    const response = await API.edu.educationalInstitutes(reqBody)
    const responseData = response.data
    const { edInstitutesList } = store.getState().educationalInstitutes.edInstitute

    dispatch(setEducationalInstitutesList([...edInstitutesList, ...responseData.data]))
    dispatch(setTotalItems(responseData.totalItems))
    dispatch(setPageSize(responseData.pageSize))

    dispatch(slice.actions.setEducationalInstitutes(response.data))
    dispatch(setError(null))
  } catch (error) {
    // dispatch(setError((error as IError).response?.data?.status?.message))
    //
  }
  // finally {
  //   dispatch(setEducationalInstituteListLoading(false))
  // }
}

const getIndividualEducationalInstitutesById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await API.edu.getIndividualEducationalInstitutes(id)

    dispatch(setIndividualEducationalInstitute(response.data.data))

    dispatch(setError(null))
  } catch (error) {
    /* empty */
  }
}

export default {
  getEducationalInstitutes,
  setRedirectionState,
  getIndividualEducationalInstitutesById,
}
