import React, { useState } from 'react'
import { Container } from '@components/Container'
import { OnDivider } from '@components/Divider'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Input, InputCheckbox } from '@uiComponents/Input'
import Link from 'next/link'

import { testEmail } from '@utils/testEmail'

export const Login = () => {
  const { isSignInLoading, error, errorContinueWithGoogle } = useAppSelector(usersSelector.user)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = () => {
    dispatch(usersMiddleware.login({ email, password }))
  }

  const handleContinueWithGoogle = () => {
    dispatch(usersMiddleware.continueWithGoogle())
  }

  return (
    <Container className="pt-10">
      <div className="mx-auto flex w-[380px] flex-col items-center">
        <h1 className="mb-5 text-xl">Log In</h1>
        <Button
          variant="outlined"
          size="fl"
          onClick={handleContinueWithGoogle}
        >
          Continue with Google
        </Button>
        <OnDivider />
        <div className="mb-5 w-full">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            type="email"
            error={error && (!email || !testEmail(email)) ? 'Email not valid' : null}
          />
        </div>
        <div className="mb-5 w-full">
          <div className="relative">
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              error={error && !password ? 'Password not valid' : null}
            />
          </div>
        </div>
        <div className="mb-5 w-full">
          <InputCheckbox
            label="Remember me"
            id="remember-me"
          />
        </div>
        <Button
          size="fl"
          disabled={isSignInLoading}
          onClick={handleLogin}
        >
          Log In
        </Button>
        {error || errorContinueWithGoogle ? (
          <div className="mt-2.5 w-full">
            <p className="text-red">{error ?? errorContinueWithGoogle}</p>
          </div>
        ) : null}
        <div className="mb-44 mt-7 w-full">
          <Link href="/reset-password">
            <Button
              className="ml-2	font-normal	"
              size="xs"
              variant="text"
            >
              Forgot Password?
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Login
