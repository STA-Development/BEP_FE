import React, { useState } from 'react'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { Container } from '@components/Container'
import { JobIcon } from '@components/Icons'
import { JobSeekerIcon } from '@components/Icons/JobSeekerIcon'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { useTranslation } from 'next-i18next'

const AfterRegistration = () => {
  const [t] = useTranslation()
  const [role, setRole] = useState<keyof typeof Roles | null>(null)
  const isRoleSelectLoading = useAppSelector(usersSelector.isRoleSelectLoading)

  const selectRole = () => {
    if (role) {
      dispatch(usersMiddleware.selectRole(role))
    }
  }

  return (
    <Container className="py-30">
      <div className="flex flex-col items-center">
        <div className="border-black-thin flex flex-col rounded border-2 p-5 xl:p-10">
          <h3 className="mb-5 text-lg">Please select your role:</h3>
          <div className="flex w-full flex-col space-y-3 xl:flex-row xl:justify-between xl:space-x-4 xl:space-y-0">
            <Button
              variant="contained"
              color="gray"
              size="role"
              active={role === Roles.JobSeeker}
              onClick={() => setRole(Roles.JobSeeker)}
            >
              <div className="mb-5 w-auto">
                <JobSeekerIcon />
              </div>
              {t(Translation.PAGE_AFTER_REGISTRATION_ACTIONS_ROLE_JOBSEEKER)}
            </Button>
            <Button
              variant="contained"
              color="gray"
              size="role"
              active={role === Roles.Organization}
              onClick={() => setRole(Roles.Organization)}
            >
              <div className="mb-5 w-auto">
                <JobIcon />
              </div>
              {t(Translation.PAGE_AFTER_REGISTRATION_ACTIONS_ROLE_ORGANIZATION)}
            </Button>
          </div>
        </div>
        <div className="mt-10 flex w-full xl:w-1/4">
          <Button
            size="fl"
            color={role ? 'primary' : 'gray'}
            disabled={!role}
            isLoading={isRoleSelectLoading}
            onClick={selectRole}
          >
            Next
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default AfterRegistration
