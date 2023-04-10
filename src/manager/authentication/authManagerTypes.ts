// TODO: change response interface to match your backend
export interface ISignInResponse {
  accessToken: string
  fullName: string
}

export interface ISignInParams {
  email: string
  password: string
}

// TODO: change response interface to match your backend
export interface ISignUpResponse {
  accessToken: string
  fullName: string
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
