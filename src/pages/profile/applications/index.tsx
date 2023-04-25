import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { AddIcon, DeleteIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'

const applications = [
  {
    label: 'Application for work',
    statuses: [
      {
        label: 'Status',
        status: 'Pending',
      },
      {
        label: 'Lorem',
        status: 'Lorem Ipsum',
      },
      {
        label: 'Lore',
        status: '37% dolor',
      },
    ],
  },
  {
    label: 'Application for work',
    statuses: [
      {
        label: 'Status',
        status: 'Pending',
      },
      {
        label: 'Lorem',
        status: 'Lorem Ipsum',
      },
      {
        label: 'Lore',
        status: '37% dolor',
      },
    ],
  },
]

export const Applications = () => {
  const [t] = useTranslation()

  const onOpenAddApplicationModal = useCallback(() => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.AddApplicationModal,
        props: {},
      })
    )
  }, [])

  const onDeleteAddApplicationModal = useCallback(() => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.DeleteApplicationModal,
        props: {},
      })
    )
  }, [])

  return (
    <>
      {applications.map((item) => (
        <div className="mb-10 rounded border border-gray-light p-10">
          <h2 className="mb-5 text-lg">{item.label}:</h2>
          <div className="mb-10 flex">
            {item.statuses.map((status) => (
              <p
                key={status.label}
                className="mr-10 text-base text-black-light"
              >
                {status.label}:
                <span className="ml-5 font-medium text-primary">{status.status}</span>
              </p>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-10">
              <Button
                size="bs"
                variant="outlined"
              >
                {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_DEACTIVATE)}
              </Button>
              <Button
                size="bs"
                variant="contained"
              >
                {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_EDIT)}
              </Button>
            </div>
            <Button
              variant="text"
              LeftIcon={DeleteIcon}
              onClick={onDeleteAddApplicationModal}
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
    </>
  )
}

export default Applications
Applications.Layout = 'Profile'
