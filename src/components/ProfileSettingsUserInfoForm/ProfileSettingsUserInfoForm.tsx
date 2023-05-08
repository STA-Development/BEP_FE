import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IkeyValuePairProps } from '@allTypes/reduxTypes/usersStateTypes'
import { FildsTable } from '@components/ProfileSettingsUserInfoForm/FildsTable'
import { Translation } from '@constants/translations'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { userInfoValidationSchema } from '@validation/auth/userInfo'

export const ProfileSettingsUserInfoForm = () => {
  const [t] = useTranslation()

  const [showParams, setShowParams] = useState<string>('')

  const { userDataInfo, isChangeUserInfoSuccess, role } = useAppSelector(usersSelector.user)

  const methods = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(userInfoValidationSchema),
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: IkeyValuePairProps) => {
    const keyValuePair: IkeyValuePairProps = {
      key: Object.keys(data).toString(),
      value: Object.values(data).toString(),
    }

    if (keyValuePair?.key && keyValuePair?.value) {
      if (role === 'JobSeeker') {
        dispatch(usersMiddleware.jobSeekerChangeInfo(keyValuePair))
      } else if (role === 'Organization') {
        dispatch(usersMiddleware.organizationChangeInfo(keyValuePair))
      }
    }
  }

  useEffect(() => {
    reset()
    setShowParams('')
    dispatch(usersMiddleware.resetChangeUserInfoSuccess())
  }, [isChangeUserInfoSuccess, reset])

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
