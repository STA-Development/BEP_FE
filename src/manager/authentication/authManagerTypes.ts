import { Roles } from '@allTypes/reduxTypes/usersStateTypes'

export interface ISignInResponse {
  accessToken: string
  refreshToken: string
  remember: boolean
}

export interface IVerifyOtpResponse {
  verifyOtpToken: string
}

export interface IForgotPasswordResponse {
  otp: number | null
}

export interface IResetPasswordParams {
  email?: string
  password?: string
  confirm_password?: string
  otp?: string | null
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
  password: string
  email: string
  name: string
}

export interface IRegisterData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface IProfile {
  uuid: string
  role: keyof typeof Roles
  imageURL: string
}
