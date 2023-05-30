import React from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { applicationsMiddleware } from '@redux/slices/applications'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

interface IApplicationListHeaderProps {
  uuid?: string
}

export const ApplicationListHeader = ({ uuid }: IApplicationListHeaderProps) => {
  const { role } = useAppSelector(usersSelector.user)
  const [t] = useTranslation()
  const onFileDownload = () => {
    dispatch(applicationsMiddleware.getJobSeekerApplicationsPdf(uuid as string))
  }

  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-lg">Application for work:</h2>
      {role === Roles.JobSeeker ? (
        <Button
          variant="outlined"
          onClick={() => onFileDownload()}
        >
          {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_DOWNLOAD_PDF)}
        </Button>
      ) : null}
    </div>
  )
}
