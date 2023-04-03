import loginManager from '@axios/authentication/login/loginManager'
import registerManager from '@axios/authentication/register/registerManager'
import exampleManager from '@axios/example/exampleManager'

const API = {
  example: exampleManager,
  authLogin: loginManager,
  authRegister: registerManager,
}

export default API
