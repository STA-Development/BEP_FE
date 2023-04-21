import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IResetPasswordParams } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import ConfirmPassword from '@pages/reset-password/confirm-password'
import RequestPassword from '@pages/reset-password/request-password'
import VerifyOtp from '@pages/reset-password/verify-otp'
import { dispatch } from '@redux/hooks'
import { usersMiddleware } from '@redux/slices/users'

import { resetPasswordValidationSchema } from '../../validation/auth/resetPassword'

export const ResetPassword = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const methods = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      otp: '',
      password: '',
    },
    resolver: yupResolver(resetPasswordValidationSchema),
  })

  const onSubmit = (data: IResetPasswordParams) => {
    dispatch(usersMiddleware.forgotPassword(data))
    setSelectedIndex((prev) => (prev > 1 ? 1 : prev) + 1)
  }

  const nextPage = () => {
    setSelectedIndex((prev) => (prev > 1 ? 1 : prev) + 1)
  }

  return (
    <Container className="pb-40 pt-10">
      <div className="flex w-full justify-center">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={`${selectedIndex !== 0 && 'hidden'}`}>
              <RequestPassword nextPage={nextPage} />
            </div>
            <div className={`${selectedIndex !== 1 && 'hidden'}`}>
              <VerifyOtp nextPage={nextPage} />
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
