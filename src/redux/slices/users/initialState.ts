import { IUserProps } from '@allTypes/reduxTypes/usersStateTypes'

export const getInitialState = (): IUserProps => ({
  user: {
    isSignInLoading: false,
    isSignUpLoading: false,
    isLogOutLoading: false,
    error: null,
    fullName: '',
    isAuthenticated: false,
    email: '',
    language: 'en',
    isLanguageChangeLoading: false,
    errorGoogleSignIn: '',
    image: null,
    isImageUploadLoading: false,
    role: '',
    isProfileLoading: false,
    isUserDataInfoLoading: false,
    userDataInfo: null,
    isChangeUserInfoSuccess: false,
  },
})
