import { IUserProps } from '@allTypes/reduxTypes/usersStateTypes'

export const getInitialState = (): IUserProps => ({
  user: {
    isSignInLoading: false,
    isSignUpLoading: false,
    isLogOutLoading: false,
    error: null,
    fullName: '',
    isAuthenticated: null,
    email: '',
    language: 'en',
    isLanguageChangeLoading: false,
    errorGoogleSignIn: '',
    role: null,
  },
})
