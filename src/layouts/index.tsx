import React, { PropsWithChildren } from 'react'
import MainLayout from '@layouts/MainLayout'
import ProfileLayout from '@layouts/ProfileLayout'

import AuthLayout from './AuthLayout'

export const Layouts = {
  Auth: AuthLayout,
  Main: MainLayout,
  Profile: ProfileLayout,
}

const LayoutContent = ({ children }: PropsWithChildren) => {
  const auth = true

  if (auth) {
    return <MainLayout>{children}</MainLayout>
  }

  return <AuthLayout>{children}</AuthLayout>
}

const Layout = ({ children }: PropsWithChildren) => <LayoutContent>{children}</LayoutContent>

export default Layout
