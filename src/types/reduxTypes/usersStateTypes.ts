export interface IUserProps {
  user: IUser
}

export interface IUser {
  fullName: string
  email: string
  isSignInLoading: boolean
  isSignUpLoading: boolean
  isLogOutLoading: boolean
  isAuthenticated: boolean | null
  role: string | null
  error: string | null
  errorGoogleSignIn: string | null
  language: string
  isLanguageChangeLoading: boolean
}
