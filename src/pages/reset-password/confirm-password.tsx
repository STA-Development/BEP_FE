import React from 'react'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'

const ConfirmPassword = () => {
  const handleSubmitPassword = () => {
    // dispatch(usersMiddleware.resetPassword(pas))
    // setEmailVerificationError('')
    console.log(99)
  }

  return (
    <div className="w-full max-w-[480px]">
      <h1 className="mb-5 text-xl">Create a new password</h1>
      <div className="grid w-full gap-5">
        <Input
          placeholder="Enter a new password"
          type="password"
          id="password"
        />
        <Input
          placeholder="Confirm password"
          type="password"
          id="confirm_password"
        />
        <Button
          size="fl"
          onClick={handleSubmitPassword}
        >
          Submit Password
        </Button>
      </div>
    </div>
  )
}

export default ConfirmPassword
