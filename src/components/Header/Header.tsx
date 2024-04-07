import React from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { Container } from '@components/Container'
import { LanguageSelector, NotificationList, User } from '@components/Header'
import HeaderMobile from '@components/Header/HeaderMobile'
import { BarsIcon, CloseIcon, LogOutIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { Disclosure } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

export const Header = () => {
  const [t] = useTranslation()
  const navigation = [
    { name: t(Translation.NAVBAR_ABOUT_US), href: '/about-us', current: false },
    {
      name: t(Translation.NAVBAR_EDUCATIONAL_INSTITUTES),
      href: '/educational-institutes',
      current: false,
    },
    {
      name: t(Translation.NAVBAR_MONITORING_SYSTEMS),
      href: '/monitoring-systems',
      current: false,
    },
    { name: t(Translation.NAVBAR_PROFILE), href: '/profile/settings', current: false },
  ]
  const isAuthenticated = useAppSelector(usersSelector.isAuthenticated)
  const isLogOutLoading = useAppSelector(usersSelector.isLogOutLoading)
  const { role } = useAppSelector(usersSelector.user)
  const showMenuItems = role !== Roles.Admin && role !== Roles.NOROLE
  const handleLogOut = () => {
    dispatch(usersMiddleware.logOut())
  }

  const handleClearError = () => {
    dispatch(usersMiddleware.clearError())
  }

  return (
    <div className="sticky top-0 z-40">
      <Disclosure
        as="nav"
        className="bg-white"
      >
        {({ open }) => (
          <>
            <div className="absolute h-[120px] w-full bg-[url('/wave1.svg')] bg-cover bg-center bg-no-repeat" />
            <Container>
              <div className="relative flex h-23 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-primary xl:hidden">
                    <span className="sr-only">{t(Translation.NAVBAR_OPEN_MAIN_MENU)}</span>
                    {open ? <CloseIcon /> : <BarsIcon />}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-start xl:ml-0 xl:items-stretch">
                  <div className="flex items-center">
                    <Link
                      href="/"
                      className="text-lg text-primary"
                    >
                      Logo
                    </Link>
                  </div>
                  <div className="ml-18 hidden w-full items-center space-x-15 rounded border-2 border-gray-thin bg-secondary px-10 xl:flex">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`child ${
                          index === navigation.length - 1
                            ? 'hidden'
                            : 'py-5 text-base font-medium text-primary hover:underline'
                        }`}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <LanguageSelector />
                    <div className="ml-5 flex flex-1 items-center justify-around">
                      {isAuthenticated ? (
                        <div className="flex items-center">
                          {showMenuItems ? (
                            <div className="mr-5">
                              <NotificationList />
                            </div>
                          ) : null}
                          <User handleLogOut={handleLogOut} />
                        </div>
                      ) : (
                        <>
                          <div>
                            <Link href="/login">
                              <Button
                                variant="text"
                                size="xs"
                                color="primary"
                                onClick={handleClearError}
                              >
                                {t(Translation.NAVBAR_LOGIN)}
                              </Button>
                            </Link>
                          </div>
                          <div className="ml-15">
                            <Link href="/register">
                              <Button
                                color="primary"
                                variant="outlined"
                                onClick={handleClearError}
                              >
                                {t(Translation.NAVBAR_REGISTER)}
                              </Button>
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
            <HeaderMobile navigation={navigation} />
            <Disclosure.Panel className="h-[calc(100vh-92px)] px-5 py-10 xl:hidden">
              {({ close }) => (
                <div>
                  <div className="mb-[120px] space-y-5">
                    {navigation.map((item) => (
                      <Link
                        onClick={() => close()}
                        key={item.name}
                        href={item.href}
                        className="block text-base font-medium text-black"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <LanguageSelector />
                    <NotificationList />
                  </div>
                  <Disclosure.Button className="w-full">
                    <Button
                      size="lg"
                      disabled={isLogOutLoading}
                      onClick={handleLogOut}
                      LeftIcon={LogOutIcon}
                    >
                      {t(Translation.NAVBAR_LOGOUT)}
                    </Button>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
