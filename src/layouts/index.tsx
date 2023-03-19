import AuthLayout from './AuthLayout'
import MainLayout from './MainLayout'
import ProfileLayout from './ProfileLayout'

export const Layouts = {
  Auth: AuthLayout,
  Main: MainLayout,
  Profile: ProfileLayout,
}

export type LayoutKeys = keyof typeof Layouts
