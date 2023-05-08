import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { LocationIcon, UserIcon } from '@components/Icons'
import { ProfileSettingsUserInfoForm } from '@components/ProfileSettingsUserInfoForm'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'
import Image from 'next/image'

export const Settings = () => {
  const [t] = useTranslation()

  const {
    isImageUploadLoading,
    isProfileLoading,
    isUserDataInfoLoading,
    userDataInfo,
    role,
    isChangeUserInfoSuccess,
  } = useAppSelector(usersSelector.user)

  const loading =
    isImageUploadLoading || isProfileLoading || isUserDataInfoLoading || !userDataInfo || !role

  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0]

    if (fileObj) {
      dispatch(usersMiddleware.uploadImage(fileObj))
    }
  }

  useEffect(() => {
    dispatch(usersMiddleware.getProfile())
  }, [])

  useEffect(() => {
    if (role === 'JobSeeker') {
      dispatch(usersMiddleware.getJobSeeker())
    } else if (role === 'Organization') {
      dispatch(usersMiddleware.getOrganization())
    }
  }, [role, isImageUploadLoading, isChangeUserInfoSuccess])

  return (
    <div className="grid divide-y divide-gray-thin">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="flex flex-col items-center pb-5 xl:flex-row xl:items-start xl:pb-10">
            {!userDataInfo?.imageURL ? (
              <div className="h-[227px] w-[227px] rounded bg-gray-thin" />
            ) : (
              <Image
                src={userDataInfo?.imageURL}
                loader={() => userDataInfo?.imageURL ?? ''}
                width={500}
                height={320}
                alt="picture"
                className="h-[227px] w-[227px] object-cover"
              />
            )}

            <div className="text-center xl:pl-10 xl:text-left">
              <h2 className="mb-2.5 mt-5 text-lg xl:mt-0">Name and Surname</h2>
              <p className="mb-5 flex justify-center text-base text-black-light xl:mb-10 xl:justify-start">
                <LocationIcon className="mr-2.5" />
                Yerevan, Armenia
              </p>
              {role === 'JobSeeker' ? (
                <div>
                  <input
                    className="hidden"
                    ref={inputRef}
                    type="file"
                    onChange={handleFileChange}
                  />
                  <Button
                    size="lg"
                    variant="outlined"
                    LeftIcon={UserIcon}
                    onClick={handleClick}
                  >
                    {t(Translation.PAGE_PROFILE_MENU_SETTINGS_ACTIONS_UPLOAD_AVATAR)}
                  </Button>{' '}
                </div>
              ) : null}
            </div>
          </div>
          <div className="h-[227px] w-[227px] rounded" />
          <ProfileSettingsUserInfoForm />
        </div>
      )}
    </div>
  )
}

export default Settings
Settings.Layout = 'Profile'
