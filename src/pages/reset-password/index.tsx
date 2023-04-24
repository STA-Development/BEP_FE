import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ISignInParams } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import ConfirmPassword from '@pages/reset-password/confirm-password'
import RequestPassword from '@pages/reset-password/request-password'
import VerifyOtp from '@pages/reset-password/verify-otp'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'

import { resetPasswordValidationSchema } from '../../validation/auth/resetPassword'

const defaultValues = {
  email: '',
  otp: '',
  password: '',
  confirm_password: '',
}

export const ResetPassword = () => {
  const { selectedIndex } = useAppSelector(usersSelector.user)

  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(resetPasswordValidationSchema),
  })

  useEffect(() => {
    dispatch(usersMiddleware.clearError())
  }, [])

  const onSubmit = (data: ISignInParams) => {
    methods.clearErrors()
    dispatch(
      usersMiddleware.resetPassword({
        password: data.password,
      })
    )
  }

  return (
    <Container className="pb-40 pt-10">
      <div className="flex w-full justify-center">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={`${selectedIndex !== 0 && 'hidden'}`}>
              <RequestPassword />
            </div>
            <div className={`${selectedIndex !== 1 && 'hidden'}`}>
              <VerifyOtp />
            </div>
            <div className={`${selectedIndex !== 2 && 'hidden'}`}>
              <ConfirmPassword />
            </div>
          </form>
        </FormProvider>
      </div>
    </Container>
  )
}

export default ResetPassword
