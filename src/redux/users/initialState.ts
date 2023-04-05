import { UsersProps } from '@allTypes/reduxTypes/usersStateTypes'

export const getInitialState = (): UsersProps => ({
  user: {
    isLoading: false,
    error: false,
    successfully: false,
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
})
