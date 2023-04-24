import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ChekInIcon } from '@components/Icons/CheckInIcon'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'

const VerifyOtp = () => {
  const methods = useFormContext()
  const { selectedIndex, error, isResetPasswordLoading } = useAppSelector(usersSelector.user)

  const handleNext = () => {
    methods.clearErrors()
    dispatch(
      usersMiddleware.verifyOtp(
        {
          email: methods.getValues('email'),
          otp: methods.getValues('otp'),
        },
        selectedIndex
      )
    )
  }

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="text-xl font-medium text-black xl:font-normal">
        The link was sent to your email
      </h1>
      <div className="mt-5 flex border-b border-gray-thin pb-5">
        <ChekInIcon className="mr-5" />
        <p className="text-base text-black-light">
          Check your inbox and click on the link for password recovery
        </p>
      </div>
      <div className="mb-5 mt-5">
        <p className="mb-5 text-base text-black-light">Didn’t get the password? Click “Resend”</p>
        <TextField
          fieldName="otp"
          {...methods}
        />
      </div>
      <Button
        type="submit"
        onClick={handleNext}
        disabled={isResetPasswordLoading}
      >
        Next
      </Button>
      {error ? (
        <div className="mt-2.5 w-full">
          <p className="text-red">{error}</p>
        </div>
      ) : null}
    </div>
  )
}

export default VerifyOtp
