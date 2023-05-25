import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IRegisterData } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { OnDivider } from '@components/Divider'
import { GoogleIcon } from '@components/Icons/GoogleIcon'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'
import { registerValidationSchema } from '@validation/auth/register'

export const Register = () => {
  const [t] = useTranslation()

  const isSignUpLoading = useAppSelector(usersSelector.isSignUpLoading)
  const error = useAppSelector(usersSelector.error)
  const errorGoogleSignIn = useAppSelector(usersSelector.errorGoogleSignIn)

  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(registerValidationSchema),
  })

  const { handleSubmit } = methods

  const onSubmit = (data: IRegisterData) => {
    dispatch(
      usersMiddleware.register({
        name: data.name,
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
            <h1 className="mb-5 text-xl">{t(Translation.PAGE_REGISTER_TITLE)}</h1>
            <Button
              variant="outlined"
              size="fl"
              className="border-light-blue group text-black"
              onClick={handleGoogleSignIn}
            >
              <div className="mr-5">
                <GoogleIcon className="group-hover:fill-white" />
              </div>
              <div>{t(Translation.PAGE_REGISTER_GOOGLE_SIGNUP)}</div>
            </Button>
            <OnDivider />
            <div className="mb-5 w-full text-left">
              <TextField
                fieldName="name"
                placeholder={t(Translation.PAGE_REGISTER_INPUT_FULL_NAME) as string}
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
                placeholder={t(Translation.PAGE_REGISTER_INPUT_PASSWORD) as string}
                type="password"
              />
            </div>
            <div className="mb-5 w-full text-left">
              <TextField
                fieldName="passwordConfirmation"
                placeholder={t(Translation.PAGE_REGISTER_INPUT_PASSWORD_CONFIRM) as string}
                type="password"
              />
            </div>

            <Button
              isLoading={isSignUpLoading}
              disabled={isSignUpLoading}
              size="fl"
              type="submit"
            >
              {t(Translation.PAGE_REGISTER_INPUT_ACTIONS_CREATE_ACCOUNT)}
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
