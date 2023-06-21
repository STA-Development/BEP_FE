import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IFilterUserListProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Container } from '@components/Container/Container'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Autocomplete, IAutoCompleteItem } from '@uiComponents/Autocomplete'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'

const role: IAutoCompleteItem[] = [
  { id: 1, name: 'JobSeeker' },
  { id: 2, name: 'Organization' },
]

const UsersList = () => {
  const isUsersListLoading = useAppSelector(usersSelector.isUsersListLoading)

  const usersList = useAppSelector(usersSelector.usersList)

  const pageSize = useAppSelector(usersSelector.pageSize)

  const [t] = useTranslation()
  const totalItems = useAppSelector(usersSelector.totalItems)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedRole, setSelectedRole] = useState<boolean>(false)
  const [userRole, setUserRole] = useState<string>('')

  const onChangePage = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const changeRole = (value: IAutoCompleteItem) => {
    setUserRole(value.name)
    setSelectedRole(true)
    setCurrentPage(1)
  }

  const deactivateUser = (uuid: string) => {
    const params: IFilterUserListProps = { page: currentPage }

    if (userRole) {
      params.key = 'role'
      params.value = userRole
    }

    dispatch(usersMiddleware.deactivateUser({ uuid, params }))
  }

  const activateUser = (uuid: string) => {
    const params: IFilterUserListProps = { page: currentPage }

    if (userRole) {
      params.key = 'role'
      params.value = userRole
    }

    dispatch(usersMiddleware.activateUser({ uuid, params }))
  }

  const resetRole = () => {
    setUserRole('')
    setSelectedRole(false)
    setCurrentPage(1)
  }

  useEffect(() => {
    const params: IFilterUserListProps = { page: currentPage }

    if (userRole) {
      params.key = 'role'
      params.value = userRole
    }

    dispatch(usersMiddleware.getUsersList(params))
  }, [currentPage, userRole])

  return (
    <Container>
      {isUsersListLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 w-full">
          <div className="mb-10 flex">
            <Autocomplete
              items={role}
              placeholder={t(Translation.PAGE_USERS_LIST_AUTOCOMPLETE_PLACEHOLDER) as string}
              onChange={changeRole}
              selectedItem={selectedRole}
              resetSelectedItem={resetRole}
            />
          </div>
          <div className="w-full overflow-x-scroll">
            <table className="w-full border-collapse border text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="w-[30%] px-2 py-2">
                    {t(Translation.PAGE_USERS_LIST_TABLE_EMAIL)}
                  </th>
                  <th className="w-[30%] px-2 py-2">{t(Translation.PAGE_USERS_LIST_TABLE_ROLE)}</th>
                  <th className="w-[30%] px-2 py-2">
                    {t(Translation.PAGE_USERS_LIST_TABLE_STATUS)}
                  </th>
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
                        {user.role === 'Deactivated' ? (
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
          <div className="mt-4 flex justify-between text-primary">
            <Button
              variant="text"
              onClick={() => onChangePage({ selected: currentPage - 1 })}
              disabled={currentPage === 1}
            >
              {t(Translation.PAGE_USERS_LIST_PREVIOUS_BUTTON)}
            </Button>
            <span className="px-4 py-2">{currentPage}</span>
            <Button
              variant="text"
              onClick={() => onChangePage({ selected: currentPage + 1 })}
              disabled={
                currentPage === Math.ceil(totalItems / pageSize) - 1 || totalItems < pageSize
              }
            >
              {t(Translation.PAGE_USERS_LIST_NEXT_BUTTON)}
            </Button>
          </div>
        </div>
      )}
    </Container>
  )
}

export default UsersList
