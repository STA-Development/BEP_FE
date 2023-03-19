import AuthLayout from './AuthLayout'
import MainLayout from './MainLayout'
export const Layouts = {
  Auth: AuthLayout,
  Main: MainLayout,
}
export type LayoutKeys = keyof typeof Layouts
