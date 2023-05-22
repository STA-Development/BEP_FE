import React, { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { AddIcon, DeleteIcon } from '@components/Icons'
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

  const { applicationsList, isApplicationLoading } = useAppSelector(
    applicationsSelector.applications
  )

  const loading = !role || isApplicationLoading || !applicationsList

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

  const onDeleteAddApplicationModal = useCallback((id: string) => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.DeleteApplicationModal,
        props: {
          id,
        },
      })
    )
  }, [])

  useEffect(() => {
    if (role === Roles.JobSeeker) {
      dispatch(applicationsMiddleware.getJobSeekerApplication())
    } else if (role === Roles.Organization) {
      dispatch(applicationsMiddleware.getOrganizationApplication())
    }
  }, [role])

  // TODO: add clone and deactivate
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {applicationsList?.map((item) => (
            <div className="mb-10 rounded border border-gray-light p-10">
              <h2 className="mb-5 text-lg">Application for work:</h2>
              <div className="mb-10 flex">
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
              <div className="flex justify-between">
                <div className="flex gap-10">
                  <Button
                    size="bs"
                    variant="contained"
                    onClick={() => redirectToIndividualApplication(item.uuid)}
                  >
                    {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_EDIT)}
                  </Button>
                </div>
                <Button
                  variant="text"
                  LeftIcon={DeleteIcon}
                  onClick={() => onDeleteAddApplicationModal(item.uuid)}
                >
                  {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_DELETE)}
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
