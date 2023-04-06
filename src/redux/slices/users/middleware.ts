import { RedirectionProps } from '@allTypes/reduxTypes/viewsStateTypes'
import API from '@axios/API'
import { ISignInParams, ISignUpParams } from '@axios/authentication/authManagerTypes'
import { AppDispatch } from '@redux/store'

import slice from '../views/slice'

import user from './user'

const { setSignInLoading, setSignUpLoading, setError } = user.actions

const { setRedirection } = slice.actions

const setRedirectionState = (value: RedirectionProps) => (dispatch: AppDispatch) => {
  dispatch(setRedirection(value))
}

const login = (params: ISignInParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSignInLoading(true))

    const response = await API.auth.signIn(params)

    localStorage.setItem('accessToken', response.data.data.accessToken)
    dispatch(setRedirectionState({ path: '/profile/settings', params: '', apply: true }))

    dispatch(setError(null))
  } catch (error) {
    setError(error as Error)
  } finally {
    dispatch(setSignInLoading(false))
  }
}

const register = (params: ISignUpParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSignUpLoading(true))

    await API.auth.signUp(params)

    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))
    dispatch(setError(null))
  } catch (error) {
    dispatch(setError(error as Error))
  } finally {
    dispatch(setSignUpLoading(false))
  }
}

export default {
  setRedirectionState,
  login,
  register,
}
