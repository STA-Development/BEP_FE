import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IRegisterData } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { OnDivider } from '@components/Divider'
import { GoogleIcon } from '@components/Icons/GoogleIcon'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Checkbox from '@uiComponents/FormFields/CheckBox'
import TextField from '@uiComponents/FormFields/TextField'

import { registerValidationSchema } from '../../validation/auth/register'

export const Register = () => {
  const { isSignUpLoading, error, errorGoogleSignIn } = useAppSelector(usersSelector.user)

  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      remember: false,
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(registerValidationSchema),
  })

  const { handleSubmit } = methods

  const onSubmit = (data: IRegisterData) => {
    dispatch(
      usersMiddleware.register({
        email: data.email,
        password: data.password,
      })
    )
  }

  const handleGoogleSignIn = () => {
    dispatch(usersMiddleware.googleSignIn())
  }

  return (
    <Container className="pt-10">
      <div className="mx-auto flex w-[380px] flex-col items-center pb-28">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full text-center"
          >
            <h1 className="mb-5 text-xl">Create an account</h1>
            <Button
              variant="outlined"
              size="fl"
              className="border-light-blue group text-black"
              onClick={handleGoogleSignIn}
            >
              <div className="mr-5">
                <GoogleIcon className="group-hover:fill-white" />
              </div>
              <div>Sign up with Google</div>
            </Button>
            <OnDivider />
            <div className="mb-5 w-full text-left">
              <TextField
                fieldName="name"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-5 w-full text-left">
              <TextField
                fieldName="email"
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-5 w-full text-left">
              <TextField
                fieldName="password"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="mb-5 w-full text-left">
              <TextField
                fieldName="passwordConfirmation"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
            <div className="mb-5 w-full">
              <Checkbox
                fieldName="remember"
                label="Remember me"
                id="remember-me"
              />
            </div>
            <Button
              disabled={isSignUpLoading}
              size="fl"
              type="submit"
            >
              Create Account
            </Button>
            <div className="w-full">
              {error || errorGoogleSignIn ? (
                <p className="mt-2.5 text-red">{error ?? errorGoogleSignIn}</p>
              ) : null}
            </div>
          </form>
        </FormProvider>
      </div>
    </Container>
  )
}

export default Register
