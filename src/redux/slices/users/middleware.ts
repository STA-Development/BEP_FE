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
  setRole,
} = slice.actions

const { setRedirection } = ViewSlice.actions

const setRedirectionState = (value: RedirectionProps) => (dispatch: AppDispatch) => {
  dispatch(setRedirection(value))
}

const changeRole = (role: string) => async (dispatch: AppDispatch) => {
  try {
    await API.auth.selectRole({ role })

    dispatch(setRedirectionState({ path: '/profile/settings', params: '', apply: true }))
  } catch (error) {
    dispatch(setError((error as IError).response?.data.status.message))
  }
}

const getProfile = () => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem('accessToken')

    if (!token) {
      dispatch(setIsAuthenticated(false))

      return
    }

    console.log({ token })

    const response = await API.auth.getProfile()

    dispatch(setIsAuthenticated(true))

    const { role } = response.data.data
    // const role = 'role'

    if (typeof role === 'string') {
      localStorage.setItem('role', role)
    }

    dispatch(setRole(role))
  } catch (error) {
    // if (!(error as IError).response?.data.data) {
    //   const token = localStorage.getItem('refreshToken')
    //
    //   if (!token) {
    //     return
    //   }
    //
    //   // await dispatch(refreshToken(token))
    //   // await dispatch(getProfile())
    // } else {
    dispatch(setError((error as IError).response?.data.status.message))

    localStorage.removeItem('accessToken')
    dispatch(setIsAuthenticated(false))
    // }
  }
}

const login = (params: ISignInParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSignInLoading(true))

    const response = await API.auth.signIn(params)

    localStorage.setItem('accessToken', response.data.data.accessToken)
    localStorage.setItem('refreshToken', response.data.data.refreshToken)

    await dispatch(getProfile())

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
      setIsAuthenticated(true)
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

    await i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)

    dispatch(setError(null))
  } catch (error) {
    dispatch(setError((error as IError).response?.data.status.message))
  } finally {
    dispatch(setLanguageChangeLoading(false))
  }
}

const uploadAvatar = (formData: FormData) => async () => {
  try {
    const response = await API.auth.uploadAvatar(formData)

    console.log(response)

    // if (!response.ok) {
    //   throw new Error(response.statusText)
    // }

    // do something with the response
  } catch (error) {
    console.error(error)
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
  changeRole,
  getProfile,
  uploadAvatar,
}
