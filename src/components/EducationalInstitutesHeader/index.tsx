import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import Filters from '@components/Educationalnstitutes/Filters'
import { FilterIcon } from '@components/Icons/FilterIcon'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { useRouter } from 'next/router'

export const EducationalInstitutesHeader = () => {
  const [t] = useTranslation()

  const [active, setActive] = useState(true)
  const { role } = useAppSelector(usersSelector.user)
  const router = useRouter()

  const openFilter = () => {
    setActive(!active)
  }

  const creatEducationalInstitutes = () => {
    router.push('/educational-institutes/create-institute')
  }

  return (
    <div className="border-b border-gray-thin py-5 xl:py-10">
      <div className="flex flex-col xl:mb-5 xl:flex-row xl:justify-between">
        <h1 className="text-xl">{t(Translation.PAGE_EDUCATIONAL_INSTITUTES_MAIN_TITLE)}</h1>
        <div className="flex flex-row items-center justify-between">
          <p className="text-base text-black-light">Home / Master</p>
          <Button
            variant="text"
            onClick={openFilter}
            LeftIcon={FilterIcon}
            className="xl:hidden"
          >
            <p>{`${
              !active
                ? t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_OPEN)
                : t(Translation.PAGE_EDUCATIONAL_INSTITUTES_FILTER_CLOSE)
            }`}</p>
          </Button>
        </div>
      </div>
      <div className="w-full xl:hidden">
        <div
          className={`w-full flex-col items-start xl:flex xl:flex-row ${active ? `flex` : `hidden`}
           `}
        >
          <Filters />
        </div>
      </div>

      <div className="mt-4 hidden w-full flex-col items-center justify-center xl:flex">
        <Filters />
      </div>
      {role === Roles.Admin ? (
        <div className="mt-5 flex w-full justify-end">
          <Button onClick={creatEducationalInstitutes}>
            {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_ADD_INSTITUTE)}
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default EducationalInstitutesHeader
