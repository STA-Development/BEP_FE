import React, { useState } from 'react'
import { UserTypes } from '@allTypes/user'
import { Container } from '@components/Container'
import { OnDivider } from '@components/Divider'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'
import InputCheckbox from '@uiComponents/Input/inputCheckbox'

export const Register = () => {
  const { isSignUpLoading, error } = useAppSelector(usersSelector.user)
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const handleRegister = () => {
    dispatch(usersMiddleware.register({ email, role: UserTypes.JOBSEEKER, password }))
  }

  const handleChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value)
  }

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <Container className="pt-10">
      <div className="mx-auto flex w-[380px] flex-col items-center pb-28">
        <h1 className="mb-5 text-xl">Create an account</h1>
        <Button
          variant="outlined"
          size="fl"
        >
          Continue with Google
        </Button>
        <OnDivider />
        <div className="mb-5 w-full">
          <Input
            onChange={handleChangeFullName}
            placeholder="Full Name"
            error={error && !fullName ? 'Full Name not valid' : null}
          />
        </div>
        <div className="mb-5 w-full">
          <Input
            onChange={handleChangeEmail}
            placeholder="Email"
            type="email"
            error={error && !email ? 'Email not valid' : null}
          />
        </div>
        <div className="mb-5 w-full">
          <Input
            onChange={handleChangePassword}
            placeholder="Password"
            type="password"
            error={error && !password ? 'Password not valid' : null}
          />
        </div>
        <div className="mb-5 w-full">
          <Input
            onChange={handleChangeConfirmPassword}
            placeholder="Confirm Password"
            type="password"
            error={
              error && (!confirmPassword || confirmPassword !== password)
                ? 'Passwords do not match'
                : null
            }
          />
        </div>
        <div className="mb-5 flex w-full items-center">
          <InputCheckbox
            label="Remember me"
            id="remember-me"
          />
        </div>
        <Button
          disabled={isSignUpLoading}
          size="fl"
          onClick={handleRegister}
        >
          Create Account
        </Button>
        <div className="w-full">{error ? <p className="mt-2.5 text-red">{error}</p> : null}</div>
      </div>
    </Container>
  )
}

export default Register
