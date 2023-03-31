import { getEnvironmentVariables } from '@utils/getEnvironmentVariables'

const { NEXT_PUBLIC_BASE_URL } = getEnvironmentVariables()

export const devToolsDefaultConfig = {
  server: NEXT_PUBLIC_BASE_URL,
}
