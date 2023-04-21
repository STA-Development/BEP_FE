import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import IconProps from '@allTypes/svg-icon'
import { DownIcon } from '@components/Icons/DownIcon'
import { ArmIcon } from '@components/Icons/lang/ArmIcon'
import { EnIcon } from '@components/Icons/lang/EnIcon'
import { RuIcon } from '@components/Icons/lang/RuIcon'
import { Translation } from '@constants/translations'
import { Menu } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

interface ISelectedLanguageProps {
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
  const [selectedLanguage, setSelectedLanguage] = useState<ISelectedLanguageProps>()
  const localLang = typeof window !== 'undefined' ? window.localStorage.getItem('language') : 'en'
  const { language } = useAppSelector(usersSelector.user)
  const [t] = useTranslation()

  const onSetLanguage = (value: string) => {
    dispatch(usersMiddleware.changeLanguage(value))
  }

  useEffect(() => {
    if (language) {
      const setLanguage: ISelectedLanguageProps[] = languageList.filter(
        (item) => localLang === item.value
      )

      setSelectedLanguage(setLanguage[0])
    }
  }, [language, localLang])

  return (
    <Menu
      as="div"
      className="relative"
    >
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex w-full items-center px-4 py-2 text-base text-white">
            {t(Translation.NAVBAR_LANGUAGE)}
            <span className="ml-5"> {selectedLanguage && <selectedLanguage.icon />}</span>
            <div className="ml-3">{open ? <DownIcon className="rotate-180" /> : <DownIcon />}</div>
          </Menu.Button>
          <Menu.Items className="absolute left-1 right-1 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-b-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="space-y-1 px-1 py-1">
              {languageList.map((item) => (
                <Menu.Item key={item.id}>
                  <Button
                    variant="flat"
                    size="fl"
                    LeftIcon={item.icon}
                    onClick={() => onSetLanguage(item.value)}
                  >
                    <p className="text-base">{item.language}</p>
                  </Button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}

export default LanguageSelector
