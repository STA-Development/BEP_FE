import React, { useEffect, useState } from 'react'
import { Container } from '@components/Container/Container'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'

const UsersList = () => {
  const isUsersListLoading = useAppSelector(usersSelector.isUsersListLoading)

  const usersList = useAppSelector(usersSelector.usersList)

  const pageSize = useAppSelector(usersSelector.pageSize)

  const totalItems = useAppSelector(usersSelector.totalItems)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const onChangePage = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const deactivateUser = (uuid: string) => {
    console.log(uuid, 'uuid')
    dispatch(usersMiddleware.deactivateUser({ uuid, currentPage }))
  }

  useEffect(() => {
    dispatch(usersMiddleware.getUsersList(currentPage as number))
  }, [currentPage])

  return (
    <Container>
      {isUsersListLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 w-full">
          <table className="w-full border-collapse overflow-y-auto border text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {usersList?.map((user) => (
                <tr
                  key={user.uuid}
                  className="border-t"
                >
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">
                    <div className="flex w-full justify-center">
                      {user.canDeactivate ? (
                        <Button variant="text">Active</Button>
                      ) : (
                        <Button
                          variant="text"
                          onClick={() => deactivateUser(user.uuid)}
                        >
                          Deactivate
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between text-primary">
            <Button
              variant="text"
              onClick={() => onChangePage({ selected: currentPage - 1 })}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="px-4 py-2">{currentPage}</span>
            <Button
              variant="text"
              onClick={() => onChangePage({ selected: currentPage + 1 })}
              disabled={currentPage === Math.ceil(totalItems / pageSize) - 1}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </Container>
  )
}

export default UsersList
