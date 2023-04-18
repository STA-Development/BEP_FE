import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ISignInParams } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { OnDivider } from '@components/Divider'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Input, InputCheckbox } from '@uiComponents/Input'
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

  const { handleSubmit, control } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    resolver: yupResolver(loginValidationSchema),
  })

  return (
    <Container className="pt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto flex w-[350px] flex-col items-center xl:w-[380px]">
          <h1 className="mb-5 text-xl">Log In</h1>
          <Button
            variant="outlined"
            size="fl"
            onClick={onGoogleAuth}
          >
            Continue with Google
          </Button>
          <OnDivider />
          <div className="mb-5 w-full">
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  placeholder="example@email.com"
                  error={fieldState.error ? fieldState.error.message : null}
                />
              )}
            />
          </div>
          <div className="mb-5 w-full">
            <div className="relative">
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    placeholder="Password"
                    type="password"
                    error={fieldState.error ? fieldState.error.message : null}
                  />
                )}
              />
            </div>
          </div>
          <div className="mb-5 w-full">
            <Controller
              control={control}
              render={({ field }) => (
                <InputCheckbox
                  {...field}
                  label="Remember me"
                  id="remember-me"
                />
              )}
              name="remember"
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
                className="ml-2	font-normal	"
                size="xs"
                variant="text"
              >
                Forgot Password?
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </Container>
  )
}

export default Login
