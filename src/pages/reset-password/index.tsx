import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IResetPasswordParams } from '@axios/authentication/authManagerTypes'
import { Container } from '@components/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import ConfirmPassword from '@pages/reset-password/confirm-password'
import RequestPassword from '@pages/reset-password/request-password'
import VerifyOtp from '@pages/reset-password/verify-otp'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import TextField from '@uiComponents/FormFields/TextField'

import { resetPasswordValidationSchema } from '../../validation/auth/resetPassword'

const ResetPasswordForm = {
  email: '',
  otp: '',
  password: '',
  confirm_password: '',
}

export const ResetPassword = () => {
  const { selectedIndex } = useAppSelector(usersSelector.user)

  const methods = useForm({
    defaultValues: ResetPasswordForm,
    mode: 'onSubmit',
    resolver: yupResolver(resetPasswordValidationSchema[selectedIndex]),
  })

  const { handleSubmit } = methods

  useEffect(() => {
    dispatch(usersMiddleware.clearError())
  }, [])

  const onSubmit = (data: IResetPasswordParams) => {
    methods.clearErrors()

    if (selectedIndex === 0) {
      dispatch(usersMiddleware.forgotPassword({ email: data.email }, selectedIndex))
    } else if (selectedIndex === 1) {
      dispatch(
        usersMiddleware.verifyOtp(
          {
            email: data.email,
            otp: data.otp?.toString(),
          },
          selectedIndex
        )
      )
    } else {
      dispatch(
        usersMiddleware.resetPassword({
          password: data.password,
        })
      )
    }
  }

  return (
    <Container className="pb-40 pt-10">
      <div className="flex w-full justify-center">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`${selectedIndex !== 0 && 'hidden'}`}>
              <RequestPassword>
                <TextField fieldName="email" />
              </RequestPassword>
            </div>
            <div className={`${selectedIndex !== 1 && 'hidden'}`}>
              <VerifyOtp>
                <TextField fieldName="otp" />
              </VerifyOtp>
            </div>
            <div className={`${selectedIndex !== 2 && 'hidden'}`}>
              <ConfirmPassword>
                <div className="mb-5 w-full">
                  <TextField
                    fieldName="password"
                    type="password"
                  />
                </div>
                <div className="mb-5 w-full">
                  <TextField
                    type="password"
                    fieldName="confirm_password"
                  />
                </div>
              </ConfirmPassword>
            </div>
          </form>
        </FormProvider>
      </div>
    </Container>
  )
}

export default ResetPassword
