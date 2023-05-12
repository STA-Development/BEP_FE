import React from 'react'
import { useTranslation } from 'react-i18next'
import { LocationIcon, UserIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'
import Image from 'next/image'

export const Settings = () => {
  const [t] = useTranslation()
  const [userAvatar, setUserAvatar] = React.useState<Blob | null>(null)
  const avatarImage = useAppSelector(usersSelector.userAvatar)
  const isUserAvatarLoading = useAppSelector(usersSelector.isUserAvatarLoading)

  const form = [
    {
      id: 'name',
      type: 'text',
      label: t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_NAME) as string,
      button: t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_NAME_ACTIONS) as string,
    },
    {
      id: 'email',
      type: 'text',
      label: t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_EMAIL) as string,
      button: t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_EMAIL_ACTIONS) as string,
    },
    {
      id: 'phone',
      type: 'text',
      label: t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_PHONE) as string,
      button: t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_PHONE_ACTIONS) as string,
    },
    {
      id: 'password',
      type: 'password',
      label: t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_PASSWORD) as string,
      button: t(Translation.PAGE_PROFILE_MENU_SETTINGS_FORM_PASSWORD_ACTIONS) as string,
    },
  ]

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    const avatar = files?.[0]
    const formData = new FormData()

    if (avatar) {
      formData.append('file', avatar)
      dispatch(usersMiddleware.uploadAvatar(formData))
      setUserAvatar(avatar)
    }
  }

  return (
    <div className="grid divide-y divide-gray-thin">
      <div className="flex flex-col items-center pb-5 xl:flex-row xl:items-start xl:pb-10">
        <div className="relative h-[227px] w-[227px] rounded bg-gray-thin">
          {avatarImage || userAvatar ? (
            <Image
              className="order-last m-0 p-0"
              src={userAvatar ? URL.createObjectURL(userAvatar) : avatarImage}
              loader={() => avatarImage ?? ''}
              alt="picture"
              fill
            />
          ) : null}
          {isUserAvatarLoading ? (
            <div className="flex h-full w-full items-center justify-center">
              <Loading />
            </div>
          ) : null}
        </div>
        <div className="text-center xl:pl-10 xl:text-left">
          <h2 className="mb-2.5 mt-5 text-lg xl:mt-0">Name and Surname</h2>
          <p className="mb-5 flex justify-center text-base text-black-light xl:mb-10 xl:justify-start">
            <LocationIcon className="mr-2.5" />
            Yerevan, Armenia
          </p>

          <label
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            <span className="group flex w-full cursor-pointer select-none items-center justify-center overflow-clip rounded border-2 border-primary bg-secondary px-20 py-2.5 align-middle text-base font-medium text-primary transition-none duration-200 ease-in-out hover:border-primary-light hover:bg-primary-light hover:text-secondary focus:outline-none focus:outline-0 disabled:cursor-not-allowed xl:w-auto">
              <UserIcon className="mr-2.5" />
              {t(Translation.PAGE_PROFILE_MENU_SETTINGS_ACTIONS_UPLOAD_AVATAR)}
            </span>
            <input
              className="hidden"
              id="file_input"
              type="file"
              onChange={handleAvatarUpload}
            />
          </label>
        </div>
      </div>
      <form
        action="src/app/(profile)/user"
        className="divide-y divide-gray-thin"
      >
        <table className="w-full table-auto">
          <tbody className="divide-y divide-gray-thin">
            {form.map((item) => (
              <tr key={item.id}>
                <td className="block px-0 pb-2.5 pt-5 align-top xl:table-cell xl:py-10">
                  <label
                    htmlFor=""
                    className="text-sm text-black-light"
                  >
                    {item.label}:
                  </label>
                </td>
                <td className="block p-0 xl:table-cell xl:py-10 xl:pr-10">
                  <input
                    id={item.id}
                    type={item.type}
                    className="w-full rounded border border-gray-light px-5 py-2.5 text-base text-black outline-0"
                  />
                </td>
                <td className="block w-1 w-full p-0 py-5 xl:table-cell xl:w-48 xl:py-10">
                  <Button
                    variant="outlined"
                    size="fl"
                  >
                    {item.button}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Settings
Settings.Layout = 'Profile'
