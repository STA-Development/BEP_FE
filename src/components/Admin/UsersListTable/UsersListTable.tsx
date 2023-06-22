import React from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'

export interface IUsersListTableProps {
  activateUser: (uuid: string) => void
  deactivateUser: (uuid: string) => void
}

export const UsersListTable = ({ activateUser, deactivateUser }: IUsersListTableProps) => {
  const usersList = useAppSelector(usersSelector.usersList)

  const [t] = useTranslation()

  return (
    <div className="w-full overflow-x-scroll">
      <table className="w-full border-collapse border text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="w-[30%] px-2 py-2">{t(Translation.PAGE_USERS_LIST_TABLE_EMAIL)}</th>
            <th className="w-[30%] px-2 py-2">{t(Translation.PAGE_USERS_LIST_TABLE_ROLE)}</th>
            <th className="w-[30%] px-2 py-2">{t(Translation.PAGE_USERS_LIST_TABLE_STATUS)}</th>
          </tr>
        </thead>
        <tbody>
          {usersList?.map((user) => (
            <tr
              key={user.uuid}
              className="border-t"
            >
              <td className="w-[30%] px-2 py-2">{user.email}</td>
              <td className="w-[30%] px-2 py-2">{user.role}</td>
              <td className="w-[30%] px-2 py-2">
                <div className="flex w-full justify-center">
                  {user.role === Roles.Deactivated ? (
                    <Button
                      variant="text"
                      onClick={() => activateUser(user.uuid)}
                    >
                      {t(Translation.PAGE_USERS_LIST_TABLE_USER_ACTIVATE)}
                    </Button>
                  ) : (
                    <Button
                      variant="text"
                      onClick={() => deactivateUser(user.uuid)}
                    >
                      {t(Translation.PAGE_USERS_LIST_TABLE_USER_DEACTIVATE)}
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
