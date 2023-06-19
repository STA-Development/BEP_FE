import React from 'react'
import { useTranslation } from 'react-i18next'
import { NotificationIcon } from '@components/Icons/NotificationIcon'
import { NotificationsLiatIcon } from '@components/Icons/NotificationsLiatIcon'
import { Translation } from '@constants/translations'
import { Menu } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { applicationsMiddleware, applicationsSelector } from '@redux/slices/applications'
import { Button } from '@uiComponents/Button'
import { useRouter } from 'next/router'

interface ChildComponentProps {
  close?: () => void
}

export const NotificationList = ({ close }: ChildComponentProps) => {
  const [t] = useTranslation()
  const router = useRouter()

  const { notifications } = useAppSelector(applicationsSelector.applications)

  const handleClick = (id: string) => {
    dispatch(applicationsMiddleware.getNotificationsId(id))

    if (typeof close === 'function') {
      close()
    }

    router.push('/profile/applications')
  }

  return (
    <Menu
      as="div"
      className="relative"
    >
      <Menu.Button className="inline-flex w-full items-center py-2">
        <p className="mr-2 text-base font-medium text-black xl:hidden">
          {t(Translation.HEADER_NOTIFICATIONS)}
        </p>
        <div className="relative hidden xl:flex">
          <NotificationIcon />
          {notifications?.length ? (
            <div className="absolute bottom-2.5 left-3 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red p-1 text-white">
              <span className="text-[10px]">{notifications?.length}</span>
            </div>
          ) : null}
        </div>
      </Menu.Button>
      <Menu.Items
        className="absolute mt-3 w-[332px] rounded-b
              border-2 border-gray-thin bg-secondary p-4 xl:right-0.5"
      >
        <div className="mb-5">
          <h3 className="font-sans text-lg">{t(Translation.HEADER_NOTIFICATIONS)}</h3>
        </div>
        <div className="h-[300px] w-full space-y-4 overflow-scroll p-1">
          {notifications?.map((item) => (
            <Menu.Item key={item.applicationUuid}>
              <div className="flex">
                <Button
                  onClick={() => handleClick(item.applicationUuid)}
                  variant="text"
                  size="xs"
                >
                  <NotificationsLiatIcon />
                  <p className="ml-5 text-sm text-black-light hover:cursor-pointer hover:underline">
                    {item.name}
                  </p>
                </Button>
              </div>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  )
}
