import React, { useEffect } from 'react'
import { LocationIcon } from '@components/Icons'
import { IndividualCarousel } from '@components/IndividualCarousel'
import { IndividualInstituteInfo } from '@components/IndividualInstituteInfo'
import { Maps } from '@components/Maps'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { getEnvironmentVariables } from '@utils/getEnvironmentVariables'

import {
  educationalInstitutesMiddleware,
  educationalInstitutesSelector,
} from '../../redux/slices/educational-instutions'

const { NEXT_PUBLIC_MAP_BASE_KEY } = getEnvironmentVariables()
const EducationalInstitutePage = () => {
  const router = useRouter()
  const { id } = router.query
  const [t] = useTranslation()
  const individualEduInstitutes = useAppSelector(
    educationalInstitutesSelector.individualEduInstitute
  )
  const isLoading = useAppSelector(educationalInstitutesSelector.isIndividualEduInstituteLoading)

  useEffect(() => {
    if (id) {
      dispatch(educationalInstitutesMiddleware.getIndividualEducationalInstitutesById(id as string))
    }
  }, [id])

  const images = individualEduInstitutes?.imageURLs?.map((image, index) => ({
    src: image,
    id: index,
  }))

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="mt-4 flex w-3/4 flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-8 flex w-full flex-row">
            <PageHeader
              title={`Institute of ${individualEduInstitutes?.province ?? ''}`}
              paths={[
                'Home',
                'Educational Institutes',
                `Institute of ${individualEduInstitutes?.province ?? ''}`,
              ]}
            />
          </div>
          {individualEduInstitutes && !isLoading ? (
            <>
              <div className="flex w-full flex-col xl:flex-row">
                <div className="flex h-80 w-full items-center justify-center overflow-hidden bg-white xl:h-auto xl:w-1/2">
                  <IndividualCarousel images={images} />
                </div>
                <IndividualInstituteInfo individualEduInstitutes={individualEduInstitutes} />
              </div>
              <div className="mt-16 flex w-full flex-col flex-wrap">
                <p className="w-full py-4 text-lg font-normal">
                  {t(
                    Translation.PAGE_EDUCATIONAL_INSTITUTES_INDIVIDUAL_INSTITUTE_DESCRIPTION_TITLE
                  )}{' '}
                </p>
                <p className="w-full text-[14px]">{individualEduInstitutes?.description}</p>
              </div>
              <div className="flex w-full flex-col py-8">
                <p className="w-full py-2 text-lg">
                  {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_INDIVIDUAL_MAP_TITLE)}
                </p>
                <div className="flex w-full flex-row py-2">
                  <LocationIcon />
                  <p className="px-2">{individualEduInstitutes?.address}</p>
                </div>
              </div>
              <div className="flex w-full flex-col flex-wrap py-2">
                <Maps
                  mapURL={`https://www.google.com/maps/embed/v1/place?q=${individualEduInstitutes?.address}&key=${NEXT_PUBLIC_MAP_BASE_KEY}`}
                  height={500}
                />
                <div className="flex w-full flex-row py-4 xl:w-1/3">
                  <Button
                    size="lg"
                    variant="outlined"
                  >
                    <a
                      href={`https://www.google.com/maps/place/${individualEduInstitutes.address}`}
                    >
                      {t(
                        Translation.PAGE_EDUCATIONAL_INSTITUTES_INDIVIDUAL_MAP_ACTIONS_GOOGLE_MAPS
                      )}
                    </a>
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  )
}

export default EducationalInstitutePage
