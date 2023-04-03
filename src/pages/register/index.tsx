import React, { useState } from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { EyeIcon, LeftIcon } from '@components/Icons'
import { OrDivider } from '@components/OrDivider'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'
import Link from 'next/link'

export const Register = () => {
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const error = false

  const handleRegisterFunc = () => {
    setIsLoading(true)
    dispatch(viewsMiddleware.register({ email, role: 'JobSeeker', password }))
    setIsLoading(false)
  }

  return (
    <Container className="pt-10">
      <div className="mb-10 flex justify-between">
        <Link href="/">
          <Button
            variant="text"
            leftIcon={<LeftIcon />}
          >
            Go back
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outlined">Log In</Button>
        </Link>
      </div>
      <div className="mx-auto flex w-[380px] flex-col items-center">
        <h1 className="mb-5 text-xl">Create an account</h1>
        <Button
          variant="outlined"
          size="fl"
        >
          Continue with Google
        </Button>
        <OrDivider />
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          id="name"
          placeholder="Full Name"
          className="mb-5 w-full rounded border border-gray-light py-2.5 px-5 outline-0 placeholder:text-base placeholder:text-black"
        />
        <div className="mb-5 w-full">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
            className={`${
              error ? 'border-red placeholder:text-red' : 'border-gray-light placeholder:text-black'
            } w-full rounded border py-2.5 px-5 outline-0 placeholder:text-base`}
          />
          {error ? <p className="mt-2.5 text-red">Email not valid</p> : null}
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
                error
                  ? 'border-red placeholder:text-red'
                  : 'border-gray-light placeholder:text-black'
              } w-full rounded border py-2.5 px-5 outline-0 placeholder:text-base`}
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
          {error ? <p className="mt-2.5 text-red">Password not valid</p> : null}
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
                error
                  ? 'border-red placeholder:text-red'
                  : 'border-gray-light placeholder:text-black'
              } w-full rounded border py-2.5 px-5 outline-0 placeholder:text-base`}
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
          {error ? <p className="mt-2.5 text-red">Passwords do not match</p> : null}
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
          disabled={isLoading}
          size="fl"
          onClick={() => handleRegisterFunc()}
        >
          Next
        </Button>
      </div>
    </Container>
  )
}

export default Register
