import React, { ChangeEvent, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { LocationIcon, UserIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { dispatch } from '@redux/hooks'
import { usersMiddleware } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

export const Settings = () => {
  const [t] = useTranslation()

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

  const fileInput = useRef<HTMLInputElement>(null)

  const handleSubmit = async (file: File) => {
    if (!file) {
      return
    }

    const formData = new FormData()

    formData.append('image', file)

    console.log(formData)

    dispatch(usersMiddleware.uploadAvatar(formData))

    // try {
    //   const response = await fetch('/api/upload-image', {
    //     method: 'POST',
    //     body: formData,
    //   })
    //
    //   if (!response.ok) {
    //     throw new Error(response.statusText)
    //   }
    //
    //   // do something with the response
    // } catch (error) {
    //   console.error(error)
    // }
  }

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files

    if (fileList?.length) {
      handleSubmit(fileList[0])
    }
  }

  const chooseFile = () => {
    fileInput.current?.click()
  }

  return (
    <div className="grid divide-y divide-gray-thin">
      <div className="flex flex-col items-center pb-5 xl:flex-row xl:items-start xl:pb-10">
        <div className="h-[227px] w-[227px] rounded bg-gray-thin" />
        <div className="text-center xl:pl-10 xl:text-left">
          <h2 className="mb-2.5 mt-5 text-lg xl:mt-0">Name and Surname</h2>
          <p className="mb-5 flex justify-center text-base text-black-light xl:mb-10 xl:justify-start">
            <LocationIcon className="mr-2.5" />
            Yerevan, Armenia
          </p>
          <input
            type="file"
            onChange={(e) => handleFileChange(e)}
            ref={fileInput}
            className="hidden"
          />
          <Button
            size="lg"
            variant="outlined"
            LeftIcon={UserIcon}
            onClick={() => chooseFile()}
          >
            {t(Translation.PAGE_PROFILE_MENU_SETTINGS_ACTIONS_UPLOAD_AVATAR)}
          </Button>
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
                <td className="block w-full p-0 py-5 xl:table-cell xl:w-48 xl:py-10">
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
Settings.WithAuth = true
