export interface IResponseNavigationProps {
  navigation: INavigation[]
  isAuthenticated: boolean
  handleLogOut: () => void
  handleClearError: () => void
}

interface INavigation {
  name: string
  href: string
  current: boolean
}
