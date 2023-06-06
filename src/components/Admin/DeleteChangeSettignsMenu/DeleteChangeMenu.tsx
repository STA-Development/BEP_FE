import React from 'react'
import { MoreIcon } from '@components/Icons/MoreIcon'
import { Menu } from '@headlessui/react'
import { Button } from '@uiComponents/Button'

interface IDeleteChangeMenuProps {
  onDeleteItem: (uuid: string) => void
  changeAction: (uuid: string) => void
  uuid: string
  deleteButtonTitle: string
  changeButtonTitle: string
}

export const DeleteChangeMenu = ({
  onDeleteItem,
  changeAction,
  uuid,
  deleteButtonTitle,
  changeButtonTitle,
}: IDeleteChangeMenuProps) => (
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
        <Menu.Items
          className="absolute right-0 w-60 divide-y divide-gray-thin rounded-b border-2
              border-gray-thin bg-secondary"
        >
          <div className="space-y-1 p-1">
            <Menu.Item>
              <Button
                size="fl"
                onClick={() => onDeleteItem(uuid)}
              >
                {deleteButtonTitle}
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                variant="text"
                size="fl"
                onClick={() => changeAction(uuid)}
              >
                {changeButtonTitle}
              </Button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </>
    )}
  </Menu>
)
