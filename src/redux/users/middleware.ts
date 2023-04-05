import { RedirectionProps } from '@allTypes/reduxTypes/viewsStateTypes'
import API from '@axios/API'
import { ILoginListParams } from '@axios/authentication/login/managerLoginTypes'
import { IRegisterListParams } from '@axios/authentication/register/registerLoginTypes'
import { AppDispatch } from '@redux/store'

import slice from '../slices/views/slice'

import user from './user'

const { setIsLoading, setError, setSuccessfully } = user.actions

const { setRedirection } = slice.actions

const setRedirectionState = (value: RedirectionProps) => (dispatch: AppDispatch) => {
  dispatch(setRedirection(value))
}

const login = (params: ILoginListParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true))

    const response = await API.authLogin.login(params)

    localStorage.setItem('accessToken', response.data.data.accessToken)
    dispatch(setError(false))

    if (response.status === 200) {
      dispatch(setSuccessfully(true))
    }
  } catch (error) {
    dispatch(setError(true))
    dispatch(setSuccessfully(false))
  } finally {
    dispatch(setIsLoading(false))
  }
}

const register = (params: IRegisterListParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsLoading(true))

    const response = await API.authRegister.register(params)

    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))

    dispatch(setError(false))

    if (response.status === 204) {
      dispatch(setSuccessfully(true))
    }
  } catch (error) {
    dispatch(setError(true))
    dispatch(setSuccessfully(false))
  } finally {
    dispatch(setIsLoading(false))
  }
}

export default {
  setRedirectionState,
  login,
  register,
}
