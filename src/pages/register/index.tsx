import React, { useState } from 'react'
import { UserTypes } from '@allTypes/user'
import { Container } from '@components/Container'
import { EyeIcon } from '@components/Icons'
import { OrDivider } from '@components/OrDivider'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

export const Register = () => {
  const { isSignUpLoading, error } = useAppSelector(usersSelector.user)
  const [show, setShow] = useState(false)
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const handleRegisterFunc = () => {
    dispatch(usersMiddleware.register({ email, role: UserTypes.JOBSEEKER, password }))
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
        <OrDivider />
        <div className="mb-5 w-full">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            id="name"
            placeholder="Full Name"
            className={`${
              error && !fullName
                ? 'border-red placeholder:text-red'
                : 'border-gray-light placeholder:text-black'
            } w-full rounded border border-gray-light px-5 py-2.5 outline-0 placeholder:text-base placeholder:text-black`}
          />
          {error && !fullName ? <p className="mt-2.5 text-red">Full Name not valid</p> : null}
        </div>
        <div className="mb-5 w-full">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
            className={`${
              error && !email
                ? 'border-red placeholder:text-red'
                : 'border-gray-light placeholder:text-black'
            } w-full rounded border px-5 py-2.5 outline-0 placeholder:text-base`}
          />
          {error && !email ? <p className="mt-2.5 text-red">Email not valid</p> : null}
        </div>
        <div className="mb-5 w-full">
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={show ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              className={`${
                error && !password
                  ? 'border-red placeholder:text-red'
                  : 'border-gray-light placeholder:text-black'
              } w-full rounded border px-5 py-2.5 outline-0 placeholder:text-base`}
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                type="button"
                onClick={() => setShow((prev) => !prev)}
              >
                <EyeIcon />
              </button>
            </div>
          </div>
          {error && !password ? <p className="mt-2.5 text-red">Password not valid</p> : null}
        </div>
        <div className="mb-5 w-full">
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className={`${
                error && (!confirmPassword || confirmPassword !== password)
                  ? 'border-red placeholder:text-red'
                  : 'border-gray-light placeholder:text-black'
              } w-full rounded border px-5 py-2.5 outline-0 placeholder:text-base`}
            />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                type="button"
                onClick={() => setShow((prev) => !prev)}
              >
                <EyeIcon />
              </button>
            </div>
          </div>
          {error && (!confirmPassword || confirmPassword !== password) ? (
            <p className="mt-2.5 text-red">Passwords do not match</p>
          ) : null}
        </div>
        <div className="mb-5 flex w-full items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="ml-1 h-5 w-5 rounded-sm border-black"
          />
          <label
            htmlFor="remember-me"
            className="ml-6 text-sm"
          >
            Remember me
          </label>
        </div>
        <Button
          disabled={isSignUpLoading}
          size="fl"
          onClick={() => handleRegisterFunc()}
        >
          Create Account
        </Button>
        <div className="w-full">
          {error ? <p className="mt-2.5 text-red">Something went wrong</p> : null}
        </div>
      </div>
    </Container>
  )
}

export default Register
