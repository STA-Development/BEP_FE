import React, { useCallback, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { Application } from '@components/ApplicationList/Applications'
import { AddIcon } from '@components/Icons'
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
  const { notificationId } = useAppSelector(applicationsSelector.applications)
  const listRef = useRef<HTMLDivElement>(null)

  const APPLICATION_POSITION = 150

  const {
    applicationsList,
    isApplicationLoading,
    isChangeIsActiveSuccess,
    isCloneApplicationSuccess,
  } = useAppSelector(applicationsSelector.applications)

  const loading = !role || isApplicationLoading || !applicationsList || isChangeIsActiveSuccess

  const onOpenAddApplicationModal = useCallback(() => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.AddApplicationModal,
        props: {},
      })
    )
  }, [])

  useEffect(() => {
    if (role === Roles.JobSeeker) {
      dispatch(applicationsMiddleware.getJobSeekerApplication())
    } else if (role === Roles.Organization) {
      dispatch(applicationsMiddleware.getOrganizationApplication())
    }

    dispatch(applicationsMiddleware.resetCloneSubmitSuccess())
    dispatch(applicationsMiddleware.resetChangeIsActiveSuccess())
  }, [role, isChangeIsActiveSuccess, isCloneApplicationSuccess])

  useEffect(() => {
    if (notificationId) {
      const container = listRef.current
      const item = container?.querySelector(`[id="${notificationId}"]`)

      if (item) {
        const { offsetTop } = item as HTMLElement

        container?.scrollTo({ top: offsetTop - APPLICATION_POSITION, behavior: 'smooth' })
      }
    }

    setTimeout(() => {
      dispatch(applicationsMiddleware.resetNotificationsId())
    }, 2000)
  })

  // TODO: add clone and deactivate
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div
          ref={listRef}
          className="h-[800px] overflow-auto pr-3"
        >
          {applicationsList?.map((item) => (
            <Application
              singleApplication={item}
              notificationId={notificationId}
            />
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
