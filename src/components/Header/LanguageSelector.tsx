import React, { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import IconProps from '@allTypes/svg-icon'
import { ChevronIcon } from '@components/Icons'
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
  const [t] = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState<ISelectedLanguageProps>()
  const language = useAppSelector(usersSelector.selectedLanguage)

  const onSetLanguage = (value: string) => {
    dispatch(usersMiddleware.changeLanguage(value))
  }

  useEffect(() => {
    if (language) {
      const setLanguage: ISelectedLanguageProps[] = languageList.filter(
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
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex w-full items-center py-2 text-base font-medium text-primary">
            {t(Translation.NAVBAR_LANGUAGE)}:
            <span className="ml-5">{selectedLanguage && <selectedLanguage.icon />}</span>
            <div className="ml-2.5">
              {open ? <ChevronIcon className="rotate-90" /> : <ChevronIcon />}
            </div>
          </Menu.Button>
          <Menu.Items
            className="absolute left-0 mt-3 w-44 divide-y divide-gray-thin rounded-b
              border-2 border-gray-thin bg-secondary"
          >
            <div className="space-y-1 p-1">
              {languageList
                .filter((lang) => lang.value !== language)
                .map((item) => (
                  <Menu.Item key={item.id}>
                    <Button
                      variant="flat"
                      size="fl"
                      LeftIcon={item.icon}
                      onClick={() => onSetLanguage(item.value)}
                    >
                      <p className="ml-2.5">{item.language}</p>
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
