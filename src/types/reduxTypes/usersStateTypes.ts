export interface IUserProps {
  user: IUser
}

export interface IUser {
  fullName: string
  email: string
  isSignInLoading: boolean
  isSignUpLoading: boolean
  isLogOutLoading: boolean
  isAuthenticated: boolean
  error: string | null
  errorGoogleSignIn: string | null
  language: string
  isLanguageChangeLoading: boolean
  image: null | File
  isImageUploadLoading: boolean
  role: string
  isProfileLoading: boolean
  isUserDataInfoLoading: boolean
  userDataInfo: IProfileProps | null
}

export interface IProfileProps {
  address?: string
  email?: string
  firstName?: string
  imageURL?: string
  lastName?: string
  phone?: string
  name?: string
}
