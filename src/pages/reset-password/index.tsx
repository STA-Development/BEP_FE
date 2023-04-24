import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ISignInParams } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import ConfirmPassword from '@pages/reset-password/confirm-password'
import RequestPassword from '@pages/reset-password/request-password'
import VerifyOtp from '@pages/reset-password/verify-otp'
import { dispatch } from '@redux/hooks'
import { usersMiddleware } from '@redux/slices/users'

import { resetPasswordValidationSchema } from '../../validation/auth/resetPassword'

const defaultValues = {
  email: '',
  otp: '',
  password: '',
  confirm_password: '',
}

export const ResetPassword = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(resetPasswordValidationSchema),
  })

  const onSubmit = (data: ISignInParams) => {
    // TODO chagne data type to IResetPasswordParams
    dispatch(usersMiddleware.login(data))
  }

  return (
    <Container className="pb-40 pt-10">
      <div className="flex w-full justify-center">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={`${selectedIndex !== 0 && 'hidden'}`}>
              <RequestPassword setSelectedIndex={setSelectedIndex} />
            </div>
            <div className={`${selectedIndex !== 1 && 'hidden'}`}>
              <VerifyOtp setSelectedIndex={setSelectedIndex} />
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
