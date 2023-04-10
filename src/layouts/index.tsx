import React, { PropsWithChildren } from 'react'
import MainLayout from '@layouts/MainLayout'
import ProfileLayout from '@layouts/ProfileLayout'

import AuthLayout from './AuthLayout'

export const Layouts = {
  Auth: AuthLayout,
  Main: MainLayout,
  Profile: ProfileLayout,
}

const LayoutContent = ({ children }: PropsWithChildren) => (
  // TODO: FIX FOR REDIRECT
  <MainLayout>{children}</MainLayout>
)

const Layout = ({ children }: PropsWithChildren) => <LayoutContent>{children}</LayoutContent>

export default Layout
