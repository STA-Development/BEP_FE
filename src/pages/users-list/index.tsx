import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IFilterUserListProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { UsersListTable } from '@components/Admin/UsersListTable'
import { Container } from '@components/Container/Container'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { IAutoCompleteItem } from '@uiComponents/Autocomplete'
import { Button } from '@uiComponents/Button'
import AutocompleteField from '@uiComponents/FormFields/Autocomplete'
import { Loading } from '@uiComponents/Loading'

const role: IAutoCompleteItem[] = [
  { id: 1, name: 'JobSeeker' },
  { id: 2, name: 'Organization' },
]

const defaultValues: {
  userRole: IAutoCompleteItem | null
} = {
  userRole: null,
}

const UsersList = () => {
  const isUsersListLoading = useAppSelector(usersSelector.isUsersListLoading)

  const pageSize = useAppSelector(usersSelector.pageSize)

  const [t] = useTranslation()
  const totalItems = useAppSelector(usersSelector.totalItems)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [selectedRole, setSelectedRole] = useState<boolean>(false)

  const methods = useForm({
    defaultValues,
    mode: 'onSubmit',
  })

  const { watch, reset } = methods

  const userRole = watch('userRole')
  const onChangePage = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected)
  }

  const deactivateUser = (uuid: string) => {
    const params: IFilterUserListProps = { page: currentPage }

    if (userRole) {
      params.key = 'role'
      params.value = userRole.name
    }

    dispatch(usersMiddleware.deactivateUser({ uuid, params }))
  }

  const activateUser = (uuid: string) => {
    const params: IFilterUserListProps = { page: currentPage }

    if (userRole) {
      params.key = 'role'
      params.value = userRole.name
    }

    dispatch(usersMiddleware.activateUser({ uuid, params }))
  }

  const resetRole = () => {
    setSelectedRole(false)
    setCurrentPage(1)
    reset(defaultValues)
  }

  useEffect(() => {
    const params: IFilterUserListProps = { page: currentPage }

    if (userRole) {
      params.key = 'role'
      params.value = userRole.name
    }

    dispatch(usersMiddleware.getUsersList(params))
  }, [currentPage, userRole])

  useEffect(() => {
    if (userRole?.name) {
      setSelectedRole(true)
      setCurrentPage(1)
    }
  }, [userRole])

  return (
    <Container>
      {isUsersListLoading ? (
        <Loading />
      ) : (
        <div className="mt-10 w-full">
          <div className="mb-10 flex">
            <FormProvider {...methods}>
              <form>
                <AutocompleteField
                  fieldName="userRole"
                  items={role}
                  placeholder={t(Translation.PAGE_USERS_LIST_AUTOCOMPLETE_PLACEHOLDER) as string}
                  selectedItem={selectedRole}
                  resetSelectedItem={resetRole}
                />
              </form>
            </FormProvider>
          </div>
          <UsersListTable
            activateUser={activateUser}
            deactivateUser={deactivateUser}
          />
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
