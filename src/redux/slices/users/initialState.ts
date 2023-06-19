import { IUserProps, Roles } from '@allTypes/reduxTypes/usersStateTypes'

export const getInitialState = (): IUserProps => ({
  isSignInLoading: false,
  isSignUpLoading: false,
  isLogOutLoading: false,
  isRoleSelectSuccessful: false,
  isUpdateProfileLoading: false,
  isResetPasswordLoading: false,
  isAuthenticated: false,
  language: 'en',
  isLanguageChangeLoading: false,
  selectedIndex: 0,
  otp: null,
  isRoleSelectLoading: false,
  isUserAvatarLoading: false,
  isUserDetailsLoading: false,
  usersList: [],
  isUsersListLoading: false,
  user: {
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
  },
})
