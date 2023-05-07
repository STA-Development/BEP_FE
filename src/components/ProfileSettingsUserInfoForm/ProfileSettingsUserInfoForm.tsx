import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { FildsTable } from '@components/ProfileSettingsUserInfoForm/FildsTable'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { loginValidationSchema } from '@validation/auth/login'

export const ProfileSettingsUserInfoForm = () => {
  const [t] = useTranslation()

  const [showParams, setShowParams] = useState<string>('')

  const { userDataInfo } = useAppSelector(usersSelector.user)

  const methods = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(loginValidationSchema),
  })

  const { handleSubmit, reset } = methods

  const onSubmit = () => {
    reset()
  }

  return (
    <FormProvider {...methods}>
      <form
        action="src/app/(profile)/user"
        className="divide-y divide-gray-thin"
        onSubmit={handleSubmit(onSubmit)}
      >
        <table className="w-full table-auto">
          <tbody className="divide-y divide-gray-thin">
            <FildsTable
              type="text"
              fieldName="name"
              fieldState={userDataInfo?.name as string}
              label={`${t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_NAME)}`}
              showParams={showParams}
              button={`${t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_NAME_ACTIONS)}`}
              setShowParams={setShowParams}
            />
            <FildsTable
              type="text"
              fieldName="email"
              fieldState={userDataInfo?.email as string}
              label={`${t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_EMAIL)}`}
              showParams={showParams}
              button={`${t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_EMAIL_ACTIONS)}`}
              setShowParams={setShowParams}
            />
            <FildsTable
              type="number"
              fieldName="phone"
              fieldState={userDataInfo?.phone as string}
              label={`${t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_PHONE)}`}
              showParams={showParams}
              button={`${t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_PHONE_ACTIONS)}`}
              setShowParams={setShowParams}
            />
            <FildsTable
              type="password"
              fieldName="password"
              fieldState="******"
              label={`${t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_PASSWORD)}`}
              showParams={showParams}
              button={`${t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_PASSWORD_ACTIONS)}`}
              setShowParams={setShowParams}
            />
          </tbody>
        </table>
      </form>
    </FormProvider>
  )
}
