import { RedirectionProps } from '@allTypes/reduxTypes/viewsStateTypes'
import API from '@axios/API'
import { IError, ISignInParams, ISignUpParams } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import ViewSlice from '../views/slice'

import slice from './slice'

const { setSignInLoading, setIsAuthenticated, setLogoutLoading, setSignUpLoading, setError } =
  slice.actions

const { setRedirection } = ViewSlice.actions

const setRedirectionState = (value: RedirectionProps) => (dispatch: AppDispatch) => {
  dispatch(setRedirection(value))
}

const login = (params: ISignInParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSignInLoading(true))

    const response = await API.auth.signIn(params)

    localStorage.setItem('accessToken', response.data.data.accessToken)
    dispatch(setRedirectionState({ path: '/profile/settings', params: '', apply: true }))
    dispatch(setIsAuthenticated(true))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setSignInLoading(false))
  }
}

const isAuthenticated = () => async (dispatch: AppDispatch) => {
  try {
    if (localStorage.getItem('accessToken')) {
      dispatch(setIsAuthenticated(true))
    }
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  }
}

const logOut = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLogoutLoading(true))
    localStorage.removeItem('accessToken')
    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))
    dispatch(setIsAuthenticated(false))
    dispatch(dispatch(setError(null)))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setLogoutLoading(false))
  }
}

const register = (params: ISignUpParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSignUpLoading(true))

    await API.auth.signUp(params)

    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setSignUpLoading(false))
  }
}

const resetPassword = (params: string) => async (dispatch: AppDispatch) => {
  try {
    // dispatch(setSignUpLoading(true))

    console.log(params, 'params')
    await API.auth.forgotPassword(params)

    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response.data.status.message))
  } finally {
    dispatch(setSignUpLoading(false))
  }
}

export default {
  setRedirectionState,
  login,
  logOut,
  isAuthenticated,
  register,
  resetPassword,
}
