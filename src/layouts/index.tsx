import React, { PropsWithChildren, useEffect, useState } from 'react'
import MainLayout from '@layouts/MainLayout'
import ProfileLayout from '@layouts/ProfileLayout'

import { isAuthenticated } from '@utils/authUtils'

import AuthLayout from './AuthLayout'

export const Layouts = {
  Auth: AuthLayout,
  Main: MainLayout,
  Profile: ProfileLayout,
}

const LayoutContent = ({ children }: PropsWithChildren) => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSignedIn(isAuthenticated())
    }
  }, [])

  // TODO: FIX FOR REDIRECT
  // if (isSignedIn) {
  console.log(isSignedIn)

  return <MainLayout>{children}</MainLayout>
  // }

  return <AuthLayout>{children}</AuthLayout>
}

const Layout = ({ children }: PropsWithChildren) => <LayoutContent>{children}</LayoutContent>

export default Layout
