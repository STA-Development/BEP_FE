import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'

import barsSvg from '~/icons/bars.svg'
import logOutSvg from '~/icons/log-out.svg'
import userSvg from '~/icons/user.svg'
import xSvg from '~/icons/x.svg'

const navigation = [
  { name: 'About US', href: '/about-us', current: false },
  { name: 'Monitoring Systems', href: '/monitoring-systems', current: false },
  { name: 'News', href: '/news', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },
]

const links = [
  { href: '/settings', label: 'Change Email' },
  { href: '/settings', label: 'Apply' },
  { href: '/settings', label: 'Edit Profile' },
  { href: '/settings', label: 'Log Out' },
]

export type HeaderProps = {
  loggedIn: boolean
}

export const Header = ({ loggedIn }: HeaderProps) => {
  const handleRegister = () => {
    console.log('register')
  }

  const handleLogin = () => {
    console.log('login')
  }

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="bg-blue">
            <div className="container">
              {/*<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">*/}
              <div className="relative flex h-23 items-center justify-between bg-blue">
                <div
                  className={`${
                    open ? 'right-0' : 'left-0'
                  } absolute inset-y-0 flex items-center lg:hidden`}
                >
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-gray-400 lg:hidden">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <Image
                        src={xSvg}
                        alt="close"
                      />
                    ) : (
                      <Image
                        src={barsSvg}
                        alt="bars"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div
                  className={`${
                    open ? 'ml-0' : 'ml-16'
                  } flex flex-1 items-center lg:ml-0 lg:items-stretch justify-start`}
                >
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="text-lg text-white"
                    >
                      Logo
                    </Link>
                  </div>
                  <div className="hidden ml-[120px] lg:flex items-center space-x-20">
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
                {open ? null : (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/*<button*/}
                    {/*  type="button"*/}
                    {/*  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"*/}
                    {/*>*/}
                    {/*  <span className="sr-only">View notifications</span>*/}
                    {/*  <BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                    {/*</button>*/}

                    {loggedIn ? (
                      <Menu
                        as="div"
                        className="relative"
                      >
                        <Menu.Button className="flex justify-center items-center bg-white w-[52px] h-[52px] rounded-full focus:outline-none">
                          <span className="sr-only">Open user menu</span>
                          {/*<img*/}
                          {/*  className="h-8 w-8 rounded-full"*/}
                          {/*  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
                          {/*  alt=""*/}
                          {/*/>*/}

                          <Image
                            src={userSvg}
                            alt="User"
                          />
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-[355px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="p-5">
                              <div className="flex items-center mb-5">
                                <div className="bg-gray-light rounded-full w-[80px] h-[80px] mr-5"></div>
                                <div>
                                  <p className="text-lg text-black mb-2.5">Samvel Hakobyan</p>
                                  <p className="text-base text-black-light">example@gmail.com</p>
                                </div>
                              </div>
                              <ul>
                                {links.map((link) => (
                                  <Menu.Item
                                    key={link.href}
                                    as={Fragment}
                                  >
                                    {() => (
                                      <li className="mb-2.5">
                                        {/*<Button*/}
                                        {/*  href={link.href}*/}
                                        {/*  variant="list-item"*/}
                                        {/*  onClick={handleRegister}*/}
                                        {/*>*/}
                                        {/*  {link.label}*/}
                                        {/*</Button>*/}
                                      </li>
                                    )}
                                  </Menu.Item>
                                ))}
                              </ul>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <>
                        <div className="hidden lg:block ml-[60px]">
                          <Button
                            href={'/auth/login'}
                            onClick={handleLogin}
                          >
                            Login
                          </Button>
                        </div>
                        <div className="ml-[60px]">
                          <Button
                            href={'/auth/register'}
                            color="secondary"
                            onClick={handleRegister}
                          >
                            Register
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="px-5 py-10 lg:hidden h-[calc(100vh-92px)]">
            <div className="space-y-5 mb-[120px]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium text-black block`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button
              size="lg"
              leftIcon={logOutSvg}
            >
              Log Out
            </Button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
