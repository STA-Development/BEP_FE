import { ReactElement, useEffect, useState } from 'react'
import { IUserProps, Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { adminRoutes, authRoutes, notAccessAdminRoutes, publicRoutes } from '@constants/router'
import { dispatch } from '@redux/hooks'
import { applicationsMiddleware } from '@redux/slices/applications'
import { usersMiddleware } from '@redux/slices/users'
import store from '@redux/store'
import { useRouter } from 'next/router'

import { isAuthenticated } from '@utils/authUtils'

const Middleware = ({ children }: { children: ReactElement }) => {
  const router = useRouter()

  const [isGetProfileComplete, setIsGetProfileComplete] = useState<boolean | null>(false)
  const [role, setRole] = useState<keyof typeof Roles | null>(Roles.NOROLE)
  const select = (state: { users: IUserProps }) => state.users.user.role !== Roles.NOROLE
  const [checkIfAuthComplete, setCheckIfAuthComplete] = useState<boolean | null>(null)

  const listener = () => {
    const ifGetProfileComplete = select(store.getState())
    const { isAuthenticated: isAuth } = store.getState().users
    const { role: userRole } = store.getState().users.user

    setCheckIfAuthComplete(isAuth)
    setRole(userRole)

    setIsGetProfileComplete(ifGetProfileComplete)
  }

  store.subscribe(listener)

  useEffect(() => {
    dispatch(usersMiddleware.isAuthenticated())
  }, [])

  useEffect(() => {
    if (role) {
      dispatch(usersMiddleware.getUser())
    } else {
      setIsGetProfileComplete(true)
    }
  }, [role, isGetProfileComplete])

  useEffect(() => {
    if (checkIfAuthComplete && !isGetProfileComplete) {
      dispatch(usersMiddleware.getProfile())
    }
  }, [checkIfAuthComplete, isGetProfileComplete, role])

  useEffect(() => {
    if (
      isGetProfileComplete &&
      checkIfAuthComplete &&
      !role &&
      router.pathname !== '/after-registration'
    ) {
      router.push('/after-registration')
    } else if (role === Roles.Admin) {
      router.push('/users-list')
    } else if (isAuthenticated() && role === Roles.Deactivated) {
      dispatch(usersMiddleware.logOut())
      router.push('/login')
    }
  }, [router, isGetProfileComplete, checkIfAuthComplete, role])

  useEffect(() => {
    if (!isAuthenticated() && publicRoutes.includes(router.pathname)) {
      router.push('/')
    }
  }, [router])

  useEffect(() => {
    if (isAuthenticated() && role !== Roles.Deactivated && authRoutes.includes(router.pathname)) {
      router.push('/')
    }
  }, [router, role])

  useEffect(() => {
    if ((!isAuthenticated() || role !== Roles.Admin) && adminRoutes.includes(router.pathname)) {
      router.push('/')
    } else if (role === Roles.Admin && notAccessAdminRoutes.includes(router.pathname)) {
      router.push('/')
    }
  }, [role, router])

  useEffect(() => {
    if (role === Roles.JobSeeker) {
      dispatch(applicationsMiddleware.getJobSeekerNotifications())
    } else if (role === Roles.Organization) {
      dispatch(applicationsMiddleware.getOrganizationNotifications())
    }
  }, [role])

  return children
}

export default Middleware
