import { RedirectionProps } from '@allTypes/reduxTypes/viewsStateTypes'
import API from '@axios/API'
import store, { AppDispatch } from '@redux/store'

import slice from './slice'

const { setTotalItems, setPageSize, setEducationalInstitutesList, setError, setRedirection } =
  slice.actions

const setRedirectionState = (value: RedirectionProps) => (dispatch: AppDispatch) => {
  dispatch(setRedirection(value))
}

export const getEducationalInstitutes = (page: number) => async (dispatch: AppDispatch) => {
  try {
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
    /* empty */
  }
}

export default {
  getEducationalInstitutes,
  setRedirectionState,
}
