import authManager from '@axios/authentication/authManager'
import exampleManager from '@axios/example/exampleManager'

const API = {
  example: exampleManager,
  auth: authManager,
}

export default API
