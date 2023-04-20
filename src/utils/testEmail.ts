export const testEmail = (email: string) => {
  const testing = /\S+@\S+\.\S+/.test(email)

  return testing
}
