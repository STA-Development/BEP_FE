import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Button } from '@uiComponents/Button'
import TextField from '@uiComponents/FormFields/TextField'

export interface IRequestPasswordProps {
  setSelectedIndex: (value: (prev: number) => number) => void
}

const RequestPassword = ({ setSelectedIndex }: IRequestPasswordProps) => {
  const methods = useFormContext()

  const sendEmail = () => {
    if (methods.getValues('email')) {
      setSelectedIndex((prev) => (prev > 1 ? 1 : prev) + 1)
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
        type="button"
        onClick={sendEmail}
      >
        Request password reset
      </Button>
    </div>
  )
}

export default RequestPassword
