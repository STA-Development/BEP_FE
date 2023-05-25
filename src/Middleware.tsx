import { ReactElement, useEffect, useState } from 'react'
import { IUserProps, Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { routerIsLogged, routerIsNotLogged } from '@constants/router'
import { dispatch } from '@redux/hooks'
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
    }
  }, [router, isGetProfileComplete, checkIfAuthComplete, role])

  useEffect(() => {
    if (!isAuthenticated() && routerIsNotLogged.includes(router.pathname)) {
      router.push('/')
    }
  }, [router])

  useEffect(() => {
    if (isAuthenticated() && routerIsLogged.includes(router.pathname)) {
      router.push('/')
    }
  }, [router])

  return children
}

export default Middleware
