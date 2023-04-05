export interface UsersProps {
  user: UserProps
}

export interface UserProps {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  isLoading: boolean
  successfully: boolean
  error: boolean
}
