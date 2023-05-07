import React, { PropsWithChildren, useEffect, useState } from 'react'
import { IUserProps, Roles } from '@allTypes/reduxTypes/usersStateTypes'
import MainLayout from '@layouts/MainLayout'
import ProfileLayout from '@layouts/ProfileLayout'
import { dispatch } from '@redux/hooks'
import { usersMiddleware } from '@redux/slices/users'
import store from '@redux/store'
import { useRouter } from 'next/router'

import AuthLayout from './AuthLayout'

export const Layouts = {
  Auth: AuthLayout,
  Main: MainLayout,
  Profile: ProfileLayout,
}

const LayoutContent = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  const { isAuthenticated } = store.getState().users
  const { role } = store.getState().users.user
  const [isGetProfileComplete, setIsGetProfileComplete] = useState<boolean | null>(null)
  const select = (state: { users: IUserProps }) => state.users.user.role !== Roles.NOROLE

  const listener = () => {
    const ifGetProfileComplete = select(store.getState())

    setIsGetProfileComplete(ifGetProfileComplete)
  }

  store.subscribe(listener)

  useEffect(() => {
    dispatch(usersMiddleware.isAuthenticated())
  }, [])

  useEffect(() => {
    if (role) {
      setIsGetProfileComplete(
        isGetProfileComplete ? store.getState().users.user.role === Roles.NOROLE : false
      )
      dispatch(usersMiddleware.getUser())
    } else {
      setIsGetProfileComplete(true)
    }
  }, [role, isGetProfileComplete])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(usersMiddleware.getProfile())
    }
  }, [isAuthenticated, role])

  useEffect(() => {
    if (
      isGetProfileComplete &&
      isAuthenticated &&
      !role &&
      router.pathname !== '/after-registration'
    ) {
      router.push('/after-registration')
    }
  }, [router, isGetProfileComplete, isAuthenticated, role])

  if (router.pathname.includes('/after-registration')) {
    return <AuthLayout>{children}</AuthLayout>
  }

  return <MainLayout>{children}</MainLayout>
}

const Layout = ({ children }: PropsWithChildren) => <LayoutContent>{children}</LayoutContent>

export default Layout
