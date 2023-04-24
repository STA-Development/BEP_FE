import { IUserProps } from '@allTypes/reduxTypes/usersStateTypes'

export const getInitialState = (): IUserProps => ({
  user: {
    isSignInLoading: false,
    isSignUpLoading: false,
    isLogOutLoading: false,
    isResetPasswordLoading: false,
    error: null,
    fullName: '',
    isAuthenticated: false,
    email: '',
    language: 'en',
    isLanguageChangeLoading: false,
    errorGoogleSignIn: '',
    selectedIndex: 0,
    otp: null,
  },
})
