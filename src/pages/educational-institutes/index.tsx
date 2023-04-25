import React, { useEffect, useState } from 'react'
import { IEdInstitutesResponse } from '@axios/educational-institutes/edInstitutesManagerTypes'
import { LocationIcon } from '@components/Icons'
import { MailIcon } from '@components/Icons/MailIcon'
import { PhoneIcon } from '@components/Icons/PhoneIcon'
import SearchHeader from '@components/SearchHeader'
import { dispatch, useAppSelector } from '@redux/hooks'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'
import {
  educationalInstitutesMiddleware,
  educationalInstitutesSelector,
} from 'src/redux/slices/educational-instutions'

import { viewsMiddleware } from '../../redux/slices/views'

const PAGE_BOTTOM = 600

const SearchPage = () => {
  const [page, setPage] = useState<number>(1)

  const { edInstitutesList, pageSize, totalItems } = useAppSelector(
    educationalInstitutesSelector.educationalInstitutesData
  )

  const redirectToIndividualEducationalInstitute = (id: string) => {
    dispatch(
      viewsMiddleware.setRedirectionState({
        path: `/educational-institutes/${id}`,
        params: '',
        apply: true,
      })
    )
  }

  useEffect(() => {
    dispatch(educationalInstitutesMiddleware.getEducationalInstitutes(page))
  }, [page])

  useEffect(() => {
    const onScroll = () => {
      const pageCount = totalItems / pageSize

      if (page < Math.round(pageCount) && edInstitutesList?.length === page * pageSize) {
        const { scrollTop } = document.documentElement
        const { scrollHeight } = document.documentElement
        const { clientHeight } = document.documentElement

        if (scrollTop + clientHeight + PAGE_BOTTOM > scrollHeight) {
          setPage((prev) => prev + 1)
        }
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [edInstitutesList, page, pageSize, totalItems])

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <SearchHeader />
      {edInstitutesList.map((institute: IEdInstitutesResponse) => (
        <div
          className="my-8 flex w-3/4 flex-col flex-wrap items-center justify-center
       overflow-hidden border-2 border-[#EAF0F3] hover:border-[#326789] xl:flex-row"
        >
          <div className="flex h-80 w-full flex-row items-center justify-center xl:w-1/3 ">
            <div className="flex h-full w-5/6 items-center justify-center rounded-md xl:w-3/4">
              <Image
                src={institute.imageURL}
                alt="img"
                loader={() => institute.imageURL}
                width={250}
                height={250}
                className=""
              />
            </div>
          </div>
          <div className="flex w-3/4 flex-col flex-wrap py-8 text-start xl:w-1/3 xl:py-0">
            <p className="flex w-full justify-start text-xl font-normal">
              {institute.name}
              {`"YMF"`}
            </p>
            <p className="flex w-3/4 justify-start pt-4 text-sm font-normal">
              {institute.subtitle}{' '}
            </p>
            <div className="flex w-full flex-row py-8 xl:w-3/4">
              <Button
                size="lg"
                onClick={() => redirectToIndividualEducationalInstitute(institute.uuid)}
              >
                Details
              </Button>
            </div>
          </div>
          <div className="hidden w-full flex-col flex-wrap items-center py-16 text-center xl:flex xl:w-1/3">
            <div className="flex w-full justify-start pt-3 text-sm font-normal">
              <PhoneIcon />
              +374 94 574 984
            </div>
            <div className="flex w-full items-center justify-start pt-3 text-sm font-normal">
              <PhoneIcon />
              {institute.phone}
            </div>
            <div className="flex w-full items-center justify-start pt-3 text-sm font-normal">
              <MailIcon />
              <p>{institute.email}</p>
            </div>
            <div className="flex w-full items-center justify-start pt-3 text-sm font-normal">
              <LocationIcon />
              {institute.address}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchPage
