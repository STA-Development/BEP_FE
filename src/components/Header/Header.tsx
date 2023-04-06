import React, { useEffect } from 'react'
import { Container } from '@components/Container'
import HeaderUser from '@components/Header/HeaderUser'
import { BarsIcon, CloseIcon, LogOutIcon } from '@components/Icons'
import { Disclosure } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },
  { name: 'News', href: '/news', current: false },
]

export const Header = () => {
  const { isAuthenticated, isLogOutLoading } = useAppSelector(usersSelector.user)

  useEffect(() => {
    dispatch(usersMiddleware.IsAuthenticated())
  }, [])

  const handleLogOut = () => {
    dispatch(usersMiddleware.logOut())
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <Container color="primary">
            <div className="relative flex h-23 items-center justify-between bg-primary">
              <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-gray-400 xl:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? <CloseIcon /> : <BarsIcon />}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start xl:ml-0 xl:items-stretch">
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="text-lg text-white"
                  >
                    Logo
                  </Link>
                </div>
                <div className="ml-[120px] hidden items-center space-x-20 xl:flex">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base text-white hover:underline"
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="sm:static sm:inset-auto sm:ml-6 sm:pr-0 absolute inset-y-0 right-0 hidden items-center xl:flex">
                {isAuthenticated ? (
                  <HeaderUser handleLogOut={handleLogOut} />
                ) : (
                  <>
                    <div className="ml-[60px]">
                      <Link href="/login">
                        <Button
                          variant="text"
                          color="secondary"
                        >
                          Login
                        </Button>
                      </Link>
                    </div>
                    <div className="ml-[60px]">
                      <Link href="/register">
                        <Button
                          color="primary"
                          variant="outlined"
                        >
                          Register
                        </Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Container>
          <Disclosure.Panel className="h-[calc(100vh-92px)] px-5 py-10 xl:hidden">
            <div className="mb-[120px] space-y-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-black"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button
              size="lg"
              disabled={isLogOutLoading}
              onClick={handleLogOut}
              LeftIcon={LogOutIcon}
            >
              Log Out
            </Button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
