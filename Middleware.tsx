import { ReactElement, useEffect, useMemo } from 'react'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { useRouter } from 'next/router'

const Middleware = ({ children }: { children: ReactElement }) => {
  const router = useRouter()
  const path = router.pathname
  const isAuthenticated = useAppSelector(usersSelector.isAuthenticated)

  const privateRoutes = useMemo(
    () => ['/profile/settings', '/profile/applications', '/fill-the-form'],
    []
  )
  const publicRoutes = useMemo(() => ['/login', '/register', '/reset-password'], [])

  useEffect(() => {
    if (publicRoutes.includes(path) && isAuthenticated) {
      router.push('/')
    }

    if (privateRoutes.includes(path) && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, path, privateRoutes, publicRoutes, router])

  return children
}

export default Middleware
