import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ISignInParams } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { OnDivider } from '@components/Divider'
import { GoogleIcon } from '@components/Icons/GoogleIcon'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Checkbox from '@uiComponents/FormFields/CheckBox'
import TextField from '@uiComponents/FormFields/TextField'
import Link from 'next/link'

import { loginValidationSchema } from '../../validation/auth/login'

export const Login = () => {
  const [t] = useTranslation()

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
      remember: false,
    },
    resolver: yupResolver(loginValidationSchema),
  })

  const { handleSubmit } = methods

  return (
    <Container className="pt-10">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-auto flex w-[380px] flex-col items-center">
            <h1 className="mb-5 text-xl">{t(Translation.PAGE_LOGIN_TITLE)}</h1>
            <Button
              variant="outlined"
              size="fl"
              className="border-light-blue text-black"
              onClick={onGoogleAuth}
            >
              <div className="mr-5">
                <GoogleIcon className="group-hover:fill-white" />
              </div>
              <div>{t(Translation.PAGE_LOGIN_GOOGLE_SIGN_IN)}</div>
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
                  placeholder={t(Translation.PAGE_LOGIN_INPUT_PASSWORD) as string}
                  type="password"
                />
              </div>
            </div>
            <div className="mb-5 w-full">
              <Checkbox
                fieldName="remember"
                label={t(Translation.PAGE_LOGIN_INPUT_CHECKBOX) as string}
                id="remember-me"
              />
            </div>
            <Button
              size="fl"
              disabled={isSignInLoading}
              type="submit"
            >
              {t(Translation.PAGE_LOGIN_INPUT_ACTIONS_LOGIN)}
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
                  {t(Translation.PAGE_LOGIN_INPUT_ACTIONS_FORGOT_PASSWORD)}
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
