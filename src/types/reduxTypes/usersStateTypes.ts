export interface IUserProps {
  user: IUser
}

export interface IUser {
  fullName: string
  email: string
  isSignInLoading: boolean
  isSignUpLoading: boolean
  error: Error | null
}
