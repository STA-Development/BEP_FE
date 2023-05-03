export const checkAuthState = (): null | boolean => {
  const isLoading = typeof window === 'undefined'
  const token = !isLoading ? localStorage.getItem('accessToken') : false

  if (isLoading) {
    return null
  }

  return Boolean(token)
}
