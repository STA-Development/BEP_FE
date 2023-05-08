import React from 'react'
import { useTranslation } from 'react-i18next'
import { LocationIcon, UserIcon } from '@components/Icons'
import { JobSeekerProfile } from '@components/Profile/JobSeeker/JobSeekerProfile'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

export const Settings = () => {
  const [t] = useTranslation()
  const { name, address } = useAppSelector(usersSelector.user)

  return (
    <div className="grid divide-y divide-gray-thin">
      <div className="flex flex-col items-center pb-5 xl:flex-row xl:items-start xl:pb-10">
        <div className="h-[227px] w-[227px] rounded bg-gray-thin" />
        <div className="text-center xl:pl-10 xl:text-left">
          <h2 className="mb-2.5 mt-5 text-lg xl:mt-0">{name}</h2>
          <p className="mb-5 flex justify-center text-base text-black-light xl:mb-10 xl:justify-start">
            <LocationIcon className="mr-2.5" />
            {address}
          </p>
          <Button
            size="lg"
            variant="outlined"
            LeftIcon={UserIcon}
          >
            {t(Translation.PAGE_PROFILE_MENU_SETTINGS_ACTIONS_UPLOAD_AVATAR)}
          </Button>
        </div>
      </div>
      <JobSeekerProfile />
    </div>
  )
}

export default Settings
Settings.Layout = 'Profile'
