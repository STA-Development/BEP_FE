import { IUserProps } from '@allTypes/reduxTypes/usersStateTypes'

export const getInitialState = (): IUserProps => ({
  user: {
    isSignInLoading: false,
    isSignUpLoading: false,
    error: null,
    fullName: '',
    email: '',
  },
})
