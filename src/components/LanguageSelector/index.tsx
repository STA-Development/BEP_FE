import React, { FC, useEffect, useState } from 'react'
import IconProps from '@allTypes/svg-icon'
import { ArmIcon } from '@components/Icons/lang/ArmIcon'
import { EnIcon } from '@components/Icons/lang/EnIcon'
import { RuIcon } from '@components/Icons/lang/RuIcon'
import { Menu } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

interface ISelectedLanguageType {
  id: number
  language: string
  value: string
  icon: FC<IconProps>
}

const languageList = [
  {
    id: 1,
    icon: EnIcon,
    language: 'English',
    value: 'en',
  },
  {
    id: 2,
    icon: RuIcon,
    language: 'Russian',
    value: 'ru',
  },
  {
    id: 3,
    icon: ArmIcon,

    language: 'Armenian',
    value: 'arm',
  },
]

export const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<ISelectedLanguageType>()
  const { language } = useAppSelector(usersSelector.user)

  const onSetLanguage = (value: string) => {
    dispatch(usersMiddleware.changeLanguage(value))
  }

  useEffect(() => {
    if (language) {
      const setLanguage: ISelectedLanguageType[] = languageList.filter(
        (item) => language === item.value
      )

      setSelectedLanguage(setLanguage[0])
    }
  }, [language])

  return (
    <Menu
      as="div"
      className="relative"
    >
      <div>
        <Menu.Button className="inline-flex w-full items-center px-4 py-2 text-base font-medium text-white">
          Language:
          <span className="ml-5"> {selectedLanguage && <selectedLanguage.icon />}</span>
        </Menu.Button>
      </div>
      <Menu.Items className="right-1xss absolute left-1 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="space-y-1 px-1 py-1">
          {languageList.map((item) => (
            <Menu.Item>
              <Button
                variant="flat"
                size="fl"
                LeftIcon={item.icon}
                onClick={() => onSetLanguage(item.value)}
              >
                <p>{item.language}</p>
              </Button>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  )
}

export default LanguageSelector
