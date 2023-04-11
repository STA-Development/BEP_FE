export const isAuthenticated = () => {
  const token = localStorage.getItem('accessToken')

  return Boolean(token)
}
