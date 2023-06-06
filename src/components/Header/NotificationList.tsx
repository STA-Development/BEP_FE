import React from 'react'
import { useTranslation } from 'react-i18next'
import { NotificationIcon } from '@components/Icons/NotificationIcon'
import { Translation } from '@constants/translations'
import { Menu } from '@headlessui/react'
import Image from 'next/image'

const notificationsList = [
  {
    id: 1,
    image: '/image1.jpg',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Posuere diam.',
  },
  {
    id: 2,
    image: '/image1.jpg',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Posuere diam.',
  },
  {
    id: 3,
    image: '/image1.jpg',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Posuere diam.',
  },
  {
    id: 4,
    image: '/image1.jpg',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Posuere diam.',
  },
  {
    id: 5,
    image: '/image1.jpg',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Posuere diam.',
  },
]

export const NotificationList = () => {
  const [t] = useTranslation()

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
          <div className="absolute bottom-2.5 left-3 right-0 flex h-3 w-3 items-center justify-center rounded-full bg-red p-1 text-white">
            <span className="text-[10px]">2</span>
          </div>
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
          {notificationsList.map((item) => (
            <Menu.Item key={item.id}>
              <div className="flex">
                <Image
                  src={item.image}
                  alt="image"
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px] rounded-full"
                />
                <p className="ml-5 text-sm text-black-light hover:cursor-pointer hover:underline">
                  {item.paragraph}
                </p>
              </div>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  )
}
