import React from 'react'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'

const ConfirmPassword = () => {
  const { error, isResetPasswordLoading } = useAppSelector(usersSelector.user)

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="mb-5 text-xl">Create a new password</h1>
      <div className=" w-full">
        <div className="mb-5 w-full">
          <TextField fieldName="password" />
        </div>
        <div className="mb-5 w-full">
          <TextField fieldName="confirm_password" />
        </div>
        <Button
          size="fl"
          type="submit"
          disabled={isResetPasswordLoading}
        >
          Submit Password
        </Button>
        {error ? (
          <div className="mt-2.5 w-full">
            <p className="text-red">{error}</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ConfirmPassword
