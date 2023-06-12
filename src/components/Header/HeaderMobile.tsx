import React from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '@components/Header/LanguageSelector'
import { LogOutIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { Disclosure } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

const HeaderMobile = ({
  navigation,
}: {
  navigation: { name: string; href: string; current: boolean }[]
}) => {
  const [t] = useTranslation()

  const isAuthenticated = useAppSelector(usersSelector.isAuthenticated)
  const isLogOutLoading = useAppSelector(usersSelector.isLogOutLoading)

  const handleLogOut = () => {
    dispatch(usersMiddleware.logOut())
  }

  const handleClearError = () => {
    dispatch(usersMiddleware.clearError())
  }

  return (
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
          </div>
          {!isAuthenticated ? (
            <div className="space-y-5">
              <div className="block text-base font-medium text-black">
                <Link
                  href="/login"
                  onClick={() => close()}
                >
                  <Button
                    size="fl"
                    type="submit"
                    onClick={handleClearError}
                  >
                    {t(Translation.PAGE_LOGIN_BUTTON)}
                  </Button>
                </Link>
              </div>
              <div className="block text-base font-medium text-black">
                <Link
                  href="/register"
                  onClick={() => close()}
                >
                  <Button
                    size="fl"
                    color="primary"
                    variant="outlined"
                    onClick={handleClearError}
                  >
                    {t(Translation.NAVBAR_REGISTER)}
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      )}
    </Disclosure.Panel>
  )
}

export default HeaderMobile
