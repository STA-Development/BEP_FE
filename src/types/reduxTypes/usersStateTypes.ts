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
  error: Error | null
}
