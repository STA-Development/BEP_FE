import {
  IDeactivateUserProps,
  IFilterUserListProps,
  IProfileUpdateProps,
} from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { RedirectionProps } from '@allTypes/reduxTypes/viewsStateTypes'
import API from '@axios/API'
import {
  IResetPasswordParams,
  ISignInParams,
  ISignUpParams,
} from '@axios/authentication/authManagerTypes'
import { usersMiddleware } from '@redux/slices/users/index'
import store, { AppDispatch } from '@redux/store'
import i18n from 'i18next'

import ViewSlice from '../views/slice'

import slice from './slice'

const {
  setSignInLoading,
  setIsAuthenticated,
  setLogoutLoading,
  setSignUpLoading,
  setSelectedIndex,
  setIsResetPasswordLoading,
  setUser,
  setLanguage,
  setisUpdateProfileLoading,
  setOtp,
  setLanguageChangeLoading,
  setIsRoleSelectLoading,
  setIsUserAvatarLoading,
  setIsUserDetailsLoading,
  setUsersList,
  setUsersListLoading,
  setPageSize,
  setTotalItems,
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

    if (params.remember) {
      localStorage.setItem('refreshToken', response.data.data.refreshToken)
    }

    dispatch(setRedirectionState({ path: '/profile/settings', params: '', apply: true }))

    dispatch(setIsAuthenticated(true))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setSignInLoading(false))
  }
}

const getAccessTokenWithRefreshToken =
  ({ refreshToken }: { refreshToken: string }) =>
  async () => {
    try {
      const response = await API.auth.getAccessToken(refreshToken)

      localStorage.setItem('accessToken', response?.data?.data?.accessToken)
    } catch (err) {
      throw new Error()
    }
  }

const isAuthenticated = () => async (dispatch: AppDispatch) => {
  try {
    if (localStorage.getItem('accessToken')) {
      dispatch(setIsAuthenticated(true))
    }
  } catch (error) {
    /* empty */
  }
}

const logOut = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLogoutLoading(true))
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))
    dispatch(setIsAuthenticated(false))
    dispatch(
      setUser({
        fullName: '',
        email: '',
        uuid: '',
        name: '',
        address: '',
        phone: '',
        employeeQuantity: 0,
        organizationType: null,
        imageURL: '',
        role: Roles.NOROLE,
      })
    )
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setLogoutLoading(false))
  }
}

const googleSignIn = () => async () => {
  try {
    await API.auth.googleSignIn()
  } catch (error) {
    /* empty */
  }
}

const register = (params: ISignUpParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setSignUpLoading(true))

    await API.auth.signUp(params)

    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setSignUpLoading(false))
  }
}

const forgotPassword =
  (params: IResetPasswordParams, selectedIndex: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsResetPasswordLoading(true))

      await API.auth.forgotPassword(params)

      dispatch(setSelectedIndex(selectedIndex + 1))
    } catch (error) {
      /* empty */
    } finally {
      dispatch(setIsResetPasswordLoading(false))
    }
  }

const verifyOtp =
  (params: IResetPasswordParams, selectedIndex: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsResetPasswordLoading(true))

      const response = await API.auth.verifyOtp(params)

      localStorage.setItem('accessToken', response.data.data.verifyOtpToken)
      dispatch(setSelectedIndex(selectedIndex + 1))
    } catch (error) {
      /* empty */
    } finally {
      dispatch(setIsResetPasswordLoading(false))
    }
  }

const resetPassword = (params: IResetPasswordParams) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsResetPasswordLoading(true))
    await API.auth.resetPassword(params)
    dispatch(setRedirectionState({ path: '/login', params: '', apply: true }))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setIsResetPasswordLoading(false))
  }
}

const clearError = () => async (dispatch: AppDispatch) => {
  dispatch(setSelectedIndex(0))
  dispatch(setOtp(null))
}

const changeLanguage = (lng: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLanguageChangeLoading(true))
    dispatch(setLanguage(lng))

    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setLanguageChangeLoading(false))
  }
}

const selectRole = (role: keyof typeof Roles) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsRoleSelectLoading(true))
    await API.auth.selectRole(role)
    dispatch(setUser({ ...store.getState().users.user, role }))

    dispatch(setRedirectionState({ path: '/profile/settings', params: '', apply: true }))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setIsRoleSelectLoading(false))
  }
}

const getUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setIsUserDetailsLoading(true))

    if (store.getState().users.user.role === Roles.JobSeeker) {
      const response = await API.jobSeeker.getJobSeeker()

      dispatch(setUser({ ...store.getState().users.user, ...response.data.data }))
    } else if (store.getState().users.user.role === Roles.Organization) {
      const response = await API.organization.getOrganization()

      dispatch(setUser({ ...store.getState().users.user, ...response.data.data }))
    }
  } catch (err) {
    /* empty */
  } finally {
    dispatch(setIsUserDetailsLoading(false))
  }
}

const getProfile = () => async (dispatch: AppDispatch) => {
  dispatch(setIsUserAvatarLoading(true))

  try {
    const response = await API.auth.getProfile()

    dispatch(setUser({ ...store.getState().users.user, ...response.data.data }))
  } catch (err) {
    /* empty */
  } finally {
    dispatch(setIsUserAvatarLoading(false))
  }
}

const uploadAvatar = (data: FormData) => async (dispatch: AppDispatch) => {
  dispatch(setIsUserAvatarLoading(true))

  try {
    await API.auth.uploadAvatar(data)
  } catch (err) {
    /* empty */
  } finally {
    dispatch(setIsUserAvatarLoading(false))
  }
}

const updateAvatarLoading = (isLoading: boolean) => async (dispatch: AppDispatch) => {
  dispatch(setIsUserAvatarLoading(isLoading))
}

const updateJobSeekerProfile = (params: IProfileUpdateProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setisUpdateProfileLoading(true))

    await API.jobSeeker.updateJobSeekerProfile(params)
    dispatch(usersMiddleware.getUser())
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setisUpdateProfileLoading(false))
  }
}

const updateOrganizationProfile =
  (params: IProfileUpdateProps) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setisUpdateProfileLoading(true))

      await API.jobSeeker.updateOrganizationProfile(params)
      dispatch(usersMiddleware.getUser())
    } catch (error) {
      /* empty */
    } finally {
      dispatch(setisUpdateProfileLoading(false))
    }
  }

const getUsersList = (params: IFilterUserListProps) => async (dispatch: AppDispatch) => {
  try {
    const response = await API.auth.getUsersList(params)

    dispatch(setUsersListLoading(true))

    dispatch(setPageSize(response.data.pageSize))

    dispatch(setUsersList(response.data.data))

    dispatch(setTotalItems(response.data.totalItems))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setUsersListLoading(false))
  }
}

const deactivateUser = (params: IDeactivateUserProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setisUpdateProfileLoading(false))

    await API.auth.deactivateUser(params.uuid)

    dispatch(usersMiddleware.getUsersList(params.params))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setisUpdateProfileLoading(false))
  }
}

const activateUser = (params: IDeactivateUserProps) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setisUpdateProfileLoading(false))

    await API.auth.activateUser(params.uuid)

    dispatch(usersMiddleware.getUsersList(params.params))
  } catch (error) {
    /* empty */
  } finally {
    dispatch(setisUpdateProfileLoading(false))
  }
}

export default {
  setRedirectionState,
  login,
  logOut,
  googleSignIn,
  isAuthenticated,
  updateJobSeekerProfile,
  getUser,
  getProfile,
  updateOrganizationProfile,
  forgotPassword,
  verifyOtp,
  register,
  selectRole,
  resetPassword,
  clearError,
  changeLanguage,
  uploadAvatar,
  updateAvatarLoading,
  getAccessTokenWithRefreshToken,
  getUsersList,
  deactivateUser,
  activateUser,
}
