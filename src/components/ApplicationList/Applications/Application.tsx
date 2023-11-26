import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  IApplicationsListProps,
  IDeactivateApplicationProps,
} from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { ApplicationMenu } from '@components/ApplicationList/ApplicationMenu'
import { CloneIcon } from '@components/Icons/CloneIcon'
import { DeactivateIcon } from '@components/Icons/DeactivateIcon'
import { EditIcon } from '@components/Icons/EditIcon'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { applicationsMiddleware } from '@redux/slices/applications'
import { usersSelector } from '@redux/slices/users'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'

interface IApplicationsProps {
  singleApplication: IApplicationsListProps
  notificationId: string | null
}

export const Application = ({ singleApplication, notificationId }: IApplicationsProps) => {
  const [t] = useTranslation()

  const { role } = useAppSelector(usersSelector.user)

  const redirectToIndividualApplication = (id: string) => {
    dispatch(
      viewsMiddleware.setRedirectionState({
        path: `/fill-the-form/${id}`,
        params: '',
        apply: true,
      })
    )
  }

  const deactivateApplication = (params: IDeactivateApplicationProps) => {
    if (role === Roles.JobSeeker) {
      dispatch(applicationsMiddleware.upDateJobSeekerApplicationIsActive(params))
    } else if (role === Roles.Organization) {
      dispatch(applicationsMiddleware.upDateOrganizationApplicationIsActive(params))
    }
  }

  const cloneApplication = (uuid: string) => {
    if (role === Roles.JobSeeker) {
      dispatch(applicationsMiddleware.cloneJobSeekerApplication(uuid))
    } else if (role === Roles.Organization) {
      dispatch(applicationsMiddleware.cloneOrganizationApplication(uuid))
    }
  }

  return (
    <div
      id={singleApplication.uuid}
      className={`${!singleApplication.isActive && 'bg-gray-light'} ${
        notificationId === singleApplication.uuid &&
        'animate-pulse border border-primary focus:border-transparent focus:outline-none'
      } mb-5 rounded border-2 border-gray-light p-5 xl:p-10`}
    >
      <div className="mb-5 flex flex-row items-start justify-between xl:items-center">
        <h2 className="mb-2 text-lg xl:mb-0">
          {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_HEADER)} {singleApplication.type}
        </h2>
        <ApplicationMenu uuid={singleApplication.uuid} />
      </div>
      <div className="mb-10 flex flex-col xl:flex-row">
        <p className="mr-10 text-base text-black-light">
          {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_STATUS)}:
          <span className="ml-5 font-medium text-primary">{singleApplication.status}</span>
        </p>
        <p className="mr-10 text-base text-black-light">
          {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_DATE)}:
          <span className="ml-5 font-medium text-primary">{singleApplication.postedAt}</span>
        </p>
        <p className="mr-10 text-base text-black-light">
          {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_COMPLETES)}:
          <span className="ml-5 font-medium text-primary">
            {singleApplication.percentCompleted}%
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-4 xl:flex-row xl:justify-between">
        <Button
          size="bs"
          variant="contained"
          LeftIcon={EditIcon}
          onClick={() => redirectToIndividualApplication(singleApplication.uuid)}
        >
          {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_EDIT)}
        </Button>
        <Button
          variant="outlined"
          LeftIcon={CloneIcon}
          onClick={() => cloneApplication(singleApplication.uuid)}
        >
          Clone Application
        </Button>
        <Button
          variant="outlined"
          LeftIcon={DeactivateIcon}
          onClick={() =>
            deactivateApplication({
              uuid: singleApplication.uuid,
              isActive: !singleApplication.isActive,
            })
          }
        >
          {!singleApplication.isActive
            ? t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_ACTIVATE)
            : t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_DEACTIVATE)}
        </Button>
      </div>
    </div>
  )
}
