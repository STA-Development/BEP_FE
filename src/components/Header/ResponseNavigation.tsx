import React from 'react'
import { useTranslation } from 'react-i18next'
import { IResponseNavigationProps } from '@allTypes/header'
import { LogOutIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { Disclosure } from '@headlessui/react'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

export const ResponseNavigation = ({
  navigation,
  isAuthenticated,
  handleLogOut,
  handleClearError,
}: IResponseNavigationProps) => {
  const isLogOutLoading = useAppSelector(usersSelector.isLogOutLoading)

  const [t] = useTranslation()

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
          </div>
          <Disclosure.Button className="w-full">
            {isAuthenticated ? (
              <Button
                size="lg"
                disabled={isLogOutLoading}
                onClick={handleLogOut}
                LeftIcon={LogOutIcon}
              >
                {t(Translation.NAVBAR_LOGOUT)}
              </Button>
            ) : (
              <div className="flex w-full flex-col space-y-3">
                <Link
                  href="/login"
                  onClick={() => close()}
                >
                  <Button
                    size="lg"
                    onClick={handleClearError}
                  >
                    {t(Translation.NAVBAR_LOGIN)}
                  </Button>
                </Link>
                <Link
                  href="/register"
                  onClick={() => close()}
                >
                  <Button
                    size="lg"
                    color="primary"
                    variant="outlined"
                    onClick={handleClearError}
                  >
                    {t(Translation.NAVBAR_REGISTER)}
                  </Button>
                </Link>
              </div>
            )}
          </Disclosure.Button>
        </div>
      )}
    </Disclosure.Panel>
  )
}
