export interface ISignInResponse {
  accessToken: string
  refreshToken: string
  remember: boolean
}

export interface ISignInParams {
  email: string
  password: string
}

export interface IError {
  response: {
    data: {
      status: {
        message: string
      }
    }
  }
}

export interface ISignUpParams {
  role: string
  password: string
  email: string
}
