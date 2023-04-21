import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ISignInParams } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { OnDivider } from '@components/Divider'
import { GoogleIcon } from '@components/Icons/GoogleIcon'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Checkbox from '@uiComponents/FormFields/CheckBox'
import TextField from '@uiComponents/FormFields/TextField'
import Link from 'next/link'

import { loginValidationSchema } from '../../validation/auth/login'

export const Login = () => {
  const { isSignInLoading, error, errorGoogleSignIn } = useAppSelector(usersSelector.user)

  const onSubmit = (data: ISignInParams) => {
    dispatch(usersMiddleware.login(data))
  }

  const onGoogleAuth = () => {
    dispatch(usersMiddleware.googleSignIn())
  }

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      // remember: false,
    },
    resolver: yupResolver(loginValidationSchema),
  })

  const { handleSubmit } = methods

  return (
    <Container className="pt-10">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-auto flex w-[380px] flex-col items-center">
            <h1 className="mb-5 text-xl">Log In</h1>
            <Button
              variant="outlined"
              size="fl"
              className="border-light-blue text-black"
              onClick={onGoogleAuth}
            >
              <div className="mr-5">
                <GoogleIcon className="group-hover:fill-white" />
              </div>
              <div>Sign in with Google</div>
            </Button>
            <OnDivider />
            <div className="mb-5 w-full">
              <TextField
                fieldName="email"
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-5 w-full">
              <div className="relative">
                <TextField
                  fieldName="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
            </div>
            <div className="mb-5 w-full">
              <Checkbox
                fieldName="remember"
                label="Remember me"
                id="remember-me"
              />
            </div>
            <Button
              size="fl"
              disabled={isSignInLoading}
              type="submit"
            >
              Log In
            </Button>
            {error || errorGoogleSignIn ? (
              <div className="mt-2.5 w-full">
                <p className="text-red">{error ?? errorGoogleSignIn}</p>
              </div>
            ) : null}
            <div className="mb-44 mt-7 w-full">
              <Link href="/reset-password">
                <Button
                  className="ml-2	font-normal"
                  size="xs"
                  variant="text"
                >
                  Forgot Password?
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}

export default Login
