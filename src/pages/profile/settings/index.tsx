import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { LocationIcon, UserIcon } from '@components/Icons'
import { JobSeekerProfile } from '@components/Profile/JobSeeker/JobSeekerProfile'
import { OrganizationProfile } from '@components/Profile/Organization/OrganizationProfile'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Loading } from '@uiComponents/Loading'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const Settings = () => {
  const [t] = useTranslation()
  const [userAvatar, setUserAvatar] = React.useState<Blob | null>(null)
  const avatarImage = useAppSelector(usersSelector.userAvatar)
  const isUserAvatarLoading = useAppSelector(usersSelector.isUserAvatarLoading)
  const { name, address, role } = useAppSelector(usersSelector.user)

  const router = useRouter()

  useEffect(() => {
    if (router.query) {
      localStorage.setItem('accessToken', router.query.accessToken as string)
    }
  }, [router])

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
              className="order-last m-0 rounded object-cover p-0"
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
          <h2 className="mb-2.5 mt-5 text-lg xl:mt-0">{name}</h2>
          <p className="mb-5 flex justify-center text-base text-black-light xl:mb-10 xl:justify-start">
            <LocationIcon className="mr-2.5" />
            {address}
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
      {role === Roles.JobSeeker ? <JobSeekerProfile /> : null}
      {role === Roles.Organization ? <OrganizationProfile /> : null}
    </div>
  )
}

export default Settings
Settings.Layout = 'Profile'
