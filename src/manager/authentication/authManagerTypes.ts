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
      data: never
      status: {
        message: string
      }
    }
  }
}

export interface ISignUpParams {
  password: string
  email: string
}

export interface IRegisterData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  remember: boolean
}

export interface IRefreshTokenResponse {
  accessToken: string
}

export interface IRefreshTokenParams {
  refreshToken: string
  remember: boolean
}

export interface IRoleParams {
  role: string
}

export interface IGetProfileResponse {
  imageURL: string
  role: string | null
  uuid: string
}
