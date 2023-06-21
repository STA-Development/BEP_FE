import React, { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { IEdInstitutesResponse } from '@axios/educational-institutes/edInstitutesManagerTypes'
import { DeleteChangeMenu } from '@components/Admin/DeleteChangeSettignsMenu'
import { Container } from '@components/Container'
import { EducationalInstitutesHeader } from '@components/EducationalInstitutesHeader'
import { LocationIcon } from '@components/Icons'
import { MailIcon } from '@components/Icons/MailIcon'
import { PhoneIcon } from '@components/Icons/PhoneIcon'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  educationalInstitutesMiddleware,
  educationalInstitutesSelector,
} from 'src/redux/slices/educational-instutions'

import { viewsMiddleware } from '../../redux/slices/views'

const PAGE_BOTTOM = 600

const SearchPage = () => {
  const isEducationalInstitutesLoading = useAppSelector(
    educationalInstitutesSelector.isIndividualEduInstituteLoading
  )
  const filters = useAppSelector(educationalInstitutesSelector.filters)

  const { edInstitutesList, pageSize, totalItems } = useAppSelector(
    educationalInstitutesSelector.educationalInstitutesData
  )
  const { role } = useAppSelector(usersSelector.user)

  const [t] = useTranslation()
  const router = useRouter()

  const redirectToIndividualEducationalInstitute = (id: string) => {
    dispatch(
      viewsMiddleware.setRedirectionState({
        path: `/educational-institutes/${id}`,
        params: '',
        apply: true,
      })
    )
  }

  const onDeleteIndividualInstituteModal = useCallback((id: string) => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.DeleteIndividualInstitute,
        props: {
          id,
        },
      })
    )
  }, [])

  const changeInstitute = (path: string) => {
    router.push({
      pathname: '/educational-institutes/change-institute',
      query: { path },
    })
  }

  useEffect(() => {
    dispatch(educationalInstitutesMiddleware.clearInstitutesList())
  }, [])

  useEffect(() => {
    dispatch(educationalInstitutesMiddleware.getEducationalInstitutes(filters))
  }, [filters])

  useEffect(() => {
    const onScroll = () => {
      const pageCount = Math.ceil(totalItems / pageSize)

      if (filters.page < Math.round(pageCount)) {
        const { scrollTop } = document.documentElement
        const { scrollHeight } = document.documentElement
        const { clientHeight } = document.documentElement

        if (scrollTop + clientHeight + PAGE_BOTTOM > scrollHeight) {
          dispatch(
            educationalInstitutesMiddleware.setEIFilters({ ...filters, page: filters.page + 1 })
          )
        }
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [edInstitutesList, filters, filters.page, pageSize, totalItems])

  return (
    <Container>
      <EducationalInstitutesHeader />
      {isEducationalInstitutesLoading && !edInstitutesList?.length ? (
        <Loading />
      ) : (
        edInstitutesList.map((institute: IEdInstitutesResponse) => (
          <div
            key={institute.uuid}
            className="border-outline my-8 mb-10 flex flex-col flex-wrap items-center justify-center overflow-hidden rounded xl:flex-row"
          >
            {role === Roles.Admin ? (
              <div className="mb-5 flex w-full justify-end">
                <DeleteChangeMenu
                  onDeleteItem={onDeleteIndividualInstituteModal}
                  changeAction={changeInstitute}
                  uuid={institute.uuid}
                  changeButtonTitle={
                    t(Translation.PAGE_EDUCATIONAL_INSTITUTES_CHANGE_INSTITUTE) as string
                  }
                  deleteButtonTitle={
                    t(Translation.PAGE_EDUCATIONAL_INSTITUTES_DELETE_INSTITUTE) as string
                  }
                />
              </div>
            ) : null}
            <div className="flex h-80 w-full flex-row items-center justify-center xl:w-1/3 ">
              <div className="flex h-full w-5/6 items-center justify-center rounded-md xl:w-3/4">
                {institute?.imageURL ? (
                  <Image
                    src={institute?.imageURL}
                    alt="img"
                    loader={() => institute.imageURL}
                    width={250}
                    height={250}
                    className="max-h-[300px] max-w-[300px]"
                  />
                ) : null}
              </div>
            </div>
            <div className="flex w-3/4 flex-col flex-wrap py-8 text-start xl:w-1/3 xl:py-0">
              <p className="flex w-full justify-start text-xl font-normal">{institute.name}</p>
              <p className="flex w-3/4 justify-start pt-4 text-sm font-normal">
                {institute.subtitle}
              </p>
              <div className="flex w-full flex-row py-8 xl:w-3/4">
                <Button
                  size="lg"
                  onClick={() => redirectToIndividualEducationalInstitute(institute.uuid)}
                >
                  {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_ACTIONS_DETAILS)}
                </Button>
              </div>
            </div>
            <div className="hidden w-full flex-col flex-wrap items-center py-16 text-center xl:flex xl:w-1/3">
              <div className="flex w-full items-center justify-start pt-3 text-sm font-normal">
                <PhoneIcon />
                <p className="pl-2.5">{institute.phone}</p>
              </div>
              <div className="flex w-full items-center justify-start pt-3 text-sm font-normal">
                <MailIcon />
                <p className="pl-2.5">{institute.email}</p>
              </div>
              <div className="flex w-full items-center justify-start pt-3 text-sm font-normal">
                <LocationIcon />
                <p className="pl-2.5">{institute.address}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </Container>
  )
}

export default SearchPage
