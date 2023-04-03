/* eslint no-process-env: 0 */
export const getEnvironmentVariables = (): Record<string, string> => ({
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL as string,
})
