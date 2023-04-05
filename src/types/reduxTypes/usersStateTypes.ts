export interface UsersProps {
  user: UserProps
}

export interface UserProps {
  fullName: string
  email: string
  isLoading: boolean
  successfully: boolean
  error: boolean
}
