import React from 'react'
import { useFormContext } from 'react-hook-form'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'

const RequestPassword = () => {
  const methods = useFormContext()
  const { selectedIndex, error, isResetPasswordLoading } = useAppSelector(usersSelector.user)

  const sendEmail = () => {
    if (methods.getValues('email')) {
      methods.clearErrors()
      dispatch(usersMiddleware.forgotPassword({ email: methods.getValues('email') }, selectedIndex))
    }
  }

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="mb-5 text-xl">Forgot your password?</h1>
      <p className="mb-5 text-base text-black-light">
        Enter the email that you’ve registered with in the field below. You will receive a link for
        password recovery
      </p>
      <div className="mb-5 w-full">
        <TextField
          fieldName="email"
          {...methods}
        />
      </div>
      <Button
        size="fl"
        type="submit"
        onClick={sendEmail}
        disabled={isResetPasswordLoading}
      >
        Request password reset
      </Button>
      {error ? (
        <div className="mt-2.5 w-full">
          <p className="text-red">{error}</p>
        </div>
      ) : null}
    </div>
  )
}

export default RequestPassword
