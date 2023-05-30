import React, { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { IDeactivateApplicationProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { ApplicationMenu } from '@components/ApplicationList/ApplicationMenu'
import { AddIcon } from '@components/Icons'
import { CloneIcon } from '@components/Icons/CloneIcon'
import { DeactivateIcon } from '@components/Icons/DeactivateIcon'
import { EditIcon } from '@components/Icons/EditIcon'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { applicationsMiddleware, applicationsSelector } from '@redux/slices/applications'
import { usersSelector } from '@redux/slices/users'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'

export const Applications = () => {
  const [t] = useTranslation()
  const { role } = useAppSelector(usersSelector.user)

  const { applicationsList, isApplicationLoading, isChangeIsActiveSuccess } = useAppSelector(
    applicationsSelector.applications
  )

  const loading = !role || isApplicationLoading || !applicationsList || isChangeIsActiveSuccess

  const onOpenAddApplicationModal = useCallback(() => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.AddApplicationModal,
        props: {},
      })
    )
  }, [])

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

  useEffect(() => {
    if (role === Roles.JobSeeker) {
      dispatch(applicationsMiddleware.getJobSeekerApplication())
    } else if (role === Roles.Organization) {
      dispatch(applicationsMiddleware.getOrganizationApplication())
    }

    dispatch(applicationsMiddleware.resetChangeIsActiveSuccess())
  }, [role, isChangeIsActiveSuccess])

  // TODO: add clone and deactivate
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {applicationsList?.map((item) => (
            <div
              className={`${
                !item.isActive && 'bg-gray-light'
              } mb-5 rounded border border-gray-light p-5 xl:p-10`}
            >
              <div className="mb-5 flex flex-row items-start justify-between xl:items-center">
                <h2 className="mb-2 text-lg xl:mb-0">Application for work:</h2>
                <ApplicationMenu uuid={item.uuid} />
              </div>
              <div className="mb-10 flex flex-col xl:flex-row">
                <p className="mr-10 text-base text-black-light">
                  Status:<span className="ml-5 font-medium text-primary">{item.status}</span>
                </p>
                <p className="mr-10 text-base text-black-light">
                  Date:<span className="ml-5 font-medium text-primary">{item.postedAt}</span>
                </p>
                <p className="mr-10 text-base text-black-light">
                  Completed:
                  <span className="ml-5 font-medium text-primary">{item.percentCompleted}%</span>
                </p>
              </div>
              <div className="flex flex-col gap-4 xl:flex-row xl:justify-between">
                <Button
                  size="bs"
                  variant="contained"
                  LeftIcon={EditIcon}
                  onClick={() => redirectToIndividualApplication(item.uuid)}
                >
                  {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_EDIT)}
                </Button>
                <Button
                  variant="outlined"
                  LeftIcon={CloneIcon}
                  onClick={() =>
                    deactivateApplication({ uuid: item.uuid, isActive: !item.isActive })
                  }
                >
                  Clone Application
                </Button>
                <Button
                  variant="outlined"
                  LeftIcon={DeactivateIcon}
                  onClick={() =>
                    deactivateApplication({ uuid: item.uuid, isActive: !item.isActive })
                  }
                >
                  {!item.isActive
                    ? t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_ACTIVATE)
                    : t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_DEACTIVATE)}
                </Button>
              </div>
            </div>
          ))}
          <Button
            variant="contained"
            color="gray"
            size="hg"
            LeftIcon={AddIcon}
            onClick={onOpenAddApplicationModal}
          >
            {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_ADD)}
          </Button>
        </div>
      )}
    </div>
  )
}

export default Applications
Applications.Layout = 'Profile'
