import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { UserTypes } from '@allTypes/user'
import { IRegisterData } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { OnDivider } from '@components/Divider'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Input, InputCheckbox } from '@uiComponents/Input'

import { registerValidationSchema } from '../../validation/auth/register'

export const Register = () => {
  const { isSignUpLoading, error, errorGoogleSignIn } = useAppSelector(usersSelector.user)

  const { control, handleSubmit } = useForm({
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

  const onSubmit = (data: IRegisterData) => {
    dispatch(
      usersMiddleware.register({
        email: data.email,
        role: UserTypes.JOBSEEKER,
        password: data.password,
      })
    )
  }

  const handleGoogleSignIn = () => {
    dispatch(usersMiddleware.googleSignIn())
  }

  return (
    <Container className="pt-10">
      <div className="mx-auto flex w-[350px] flex-col items-center pb-28 xl:w-[380px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full text-center"
        >
          <h1 className="mb-5 text-xl">Create an account</h1>
          <Button
            variant="outlined"
            size="fl"
            onClick={handleGoogleSignIn}
          >
            Continue with Google
          </Button>
          <OnDivider />
          <div className="mb-5 w-full">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  placeholder="Full Name"
                  error={fieldState.error ? fieldState.error.message : null}
                />
              )}
            />
          </div>
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
          <div className="mb-5 w-full">
            <Controller
              control={control}
              name="passwordConfirmation"
              render={({ field, fieldState }) => (
                <Input
                  {...field}
                  placeholder="Confirm Password"
                  type="password"
                  error={fieldState.error ? fieldState.error.message : null}
                />
              )}
            />
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
      </div>
    </Container>
  )
}

export default Register
