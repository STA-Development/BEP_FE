import React from 'react'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'

const ConfirmPassword = () => (
  <div className="w-full max-w-[480px]">
    <h1 className="mb-5 text-xl">Create a new password</h1>
    <div className="grid w-full gap-5">
      <TextField fieldName="password" />
      <TextField fieldName="confirm_password" />
      <Button
        size="fl"
        type="submit"
      >
        Submit Password
      </Button>
    </div>
  </div>
)

export default ConfirmPassword
