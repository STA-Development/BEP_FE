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
  language: string
  isLanguageChangeLoading: boolean
}
