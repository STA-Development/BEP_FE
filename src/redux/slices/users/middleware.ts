import { RedirectionProps } from '@allTypes/reduxTypes/viewsStateTypes'
import API from '@axios/API'
import { IError, ISignInParams, ISignUpParams } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'
import i18n from 'i18next'

import ViewSlice from '../views/slice'

import slice from './slice'

const {
  setSignInLoading,
  setIsAuthenticated,
  setLogoutLoading,
  setSignUpLoading,
  setError,
  setLanguage,
  setLanguageChangeLoading,
  setErrorGoogleSignIn,
} = slice.actions

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
    dispatch(setError((error as IError).response?.data.status.message))
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
    dispatch(setError((error as IError).response?.data.status.message))
  }
}

const logOut = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLogoutLoading(true))
    localStorage.removeItem('accessToken')
    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))
    dispatch(setIsAuthenticated(false))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response?.data.status.message))
  } finally {
    dispatch(setLogoutLoading(false))
  }
}

const googleSignIn = () => async (dispatch: AppDispatch) => {
  try {
    await API.auth.googleSignIn()
    dispatch(setErrorGoogleSignIn(null))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setErrorGoogleSignIn((error as IError).response?.data.status.message))
    dispatch(setError(null))
  }
}

const register = (params: ISignUpParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSignUpLoading(true))

    await API.auth.signUp(params)

    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response?.data.status.message))
  } finally {
    dispatch(setSignUpLoading(false))
  }
}

const clearError = () => async (dispatch: AppDispatch) => {
  dispatch(setError(null))
  dispatch(setErrorGoogleSignIn(null))
}

const changeLanguage = (lng: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLanguageChangeLoading(true))
    dispatch(setLanguage(lng))

    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response?.data.status.message))
  } finally {
    dispatch(setLanguageChangeLoading(false))
  }
}

export default {
  setRedirectionState,
  login,
  logOut,
  googleSignIn,
  isAuthenticated,
  register,
  clearError,
  changeLanguage,
}
