import React, { useEffect, useState } from 'react'
import { Container } from '@components/Container/Container'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'

const UsersList = () => {
  const isUsersListLoading = useAppSelector(usersSelector.isUsersListLoading)

  const usersPerPage = 10
  const usersList = useAppSelector(usersSelector.usersList)

  const [currentPage, setCurrentPage] = useState(0)

  const onChangePage = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const offset = currentPage * usersPerPage
  const paginatedData = usersList?.slice(offset, offset + usersPerPage)

  useEffect(() => {
    dispatch(usersMiddleware.getUsersList())
  }, [])

  return (
    <Container>
      {isUsersListLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 w-full">
          <table className="w-full border-collapse border text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData?.map((user) => (
                <tr
                  key={user.uuid}
                  className="border-t"
                >
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex justify-between text-primary">
            <Button
              variant="text"
              onClick={() => onChangePage({ selected: currentPage - 1 })}
              disabled={currentPage === 0}
            >
              Previous
            </Button>
            <span className="px-4 py-2">{currentPage + 1}</span>
            <Button
              variant="text"
              onClick={() => onChangePage({ selected: currentPage + 1 })}
              disabled={currentPage === Math.ceil(usersList.length / usersPerPage) - 1}
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
