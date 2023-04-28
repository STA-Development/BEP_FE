import React from 'react'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'

export const OnDivider = () => {
  const [t] = useTranslation()

  return (
    <div
      className={`relative my-8 h-px w-full bg-gray-light after:absolute after:-top-3.5 after:left-0 after:right-0 after:mx-auto
              after:w-14 after:bg-white after:text-center after:text-base after:text-black-light after:content-["${t(
                Translation.PAGE_LOGIN_OR
              )}"]`}
    />
  )
}
