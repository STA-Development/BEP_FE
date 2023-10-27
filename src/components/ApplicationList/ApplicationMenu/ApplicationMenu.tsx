import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { DeleteIcon } from '@components/Icons'
import { MoreIcon } from '@components/Icons/MoreIcon'
import { Translation } from '@constants/translations'
import { Menu } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { applicationsMiddleware } from '@redux/slices/applications'
import { usersSelector } from '@redux/slices/users'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'

interface IApplicationMenuProps {
  uuid?: string
}

export const ApplicationMenu = ({ uuid }: IApplicationMenuProps) => {
  const { role } = useAppSelector(usersSelector.user)
  const [t] = useTranslation()
  const onFileDownload = () => {
    dispatch(applicationsMiddleware.getJobSeekerApplicationsPdf(uuid as string))
  }

  const onDeleteAddApplicationModal = useCallback(() => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.DeleteApplicationModal,
        props: {
          id: uuid,
        },
      })
    )
  }, [uuid])

  return (
    <Menu
      as="div"
      className="relative z-20"
    >
      {() => (
        <>
          <Menu.Button className="flex w-full items-end justify-end py-2 text-base font-medium text-black xl:text-base xl:font-medium xl:text-primary">
            <div className="flex w-full items-end">
              <MoreIcon />
            </div>
          </Menu.Button>
          <Menu.Items className="absolute right-0 w-60 divide-y divide-gray-thin rounded-b border-2 border-gray-thin bg-secondary">
            <div className="space-y-1 p-1">
              {role === Roles.JobSeeker ? (
                <Menu.Item>
                  <Button
                    variant="outlined"
                    onClick={() => onFileDownload()}
                    size="fl"
                  >
                    {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_DOWNLOAD_PDF)}
                  </Button>
                </Menu.Item>
              ) : null}
              <Menu.Item>
                <Button
                  variant="text"
                  LeftIcon={DeleteIcon}
                  onClick={onDeleteAddApplicationModal}
                >
                  {t(Translation.PAGE_PROFILE_MENU_APPLICATIONS_ACTIONS_DELETE)}
                </Button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}
