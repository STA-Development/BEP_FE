import React, { useCallback } from 'react'
import { ModalName } from '@allTypes/modals'
import { Menu } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'

interface IAboutUsMemberMenu {
  setChangeMember: (uuid: string) => void
  uuid: string
}

export const AboutUsMenu = ({ setChangeMember, uuid }: IAboutUsMemberMenu) => {
  const onDeleteTeamMemberModal = useCallback(() => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.DeleteTeamMember,
        props: {
          id: uuid,
        },
      })
    )
  }, [uuid])

  return (
    <Menu
      as="div"
      className="relative"
    >
      {() => (
        <>
          <Menu.Button className="inline-flex w-full items-center py-2 text-base font-medium text-black xl:text-base xl:font-medium xl:text-primary">
            <span className="ml-5">...</span>
          </Menu.Button>
          <Menu.Items
            className="absolute left-0 mt-3 w-44 divide-y divide-gray-thin rounded-b
              border-2 border-gray-thin bg-secondary"
          >
            <div className="space-y-1 p-1">
              <Menu.Item>
                <Button
                  variant="flat"
                  size="fl"
                  onClick={() => setChangeMember(uuid)}
                >
                  <p className="ml-2.5 ">Create</p>
                </Button>
              </Menu.Item>
              <Menu.Item>
                <Button
                  variant="flat"
                  size="fl"
                  onClick={onDeleteTeamMemberModal}
                >
                  <p className="ml-2.5 ">Delete</p>
                </Button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}
