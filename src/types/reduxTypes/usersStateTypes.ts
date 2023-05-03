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
  isResetPasswordLoading: boolean
  error: string | null
  errorGoogleSignIn: string | null
  language: string
  selectedIndex: number
  isLanguageChangeLoading: boolean
  otp: number | null
}
