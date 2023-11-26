import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import { useAppSelector } from '@redux/hooks'
import { applicationsSelector } from '@redux/slices/applications'
import { Button } from '@uiComponents/Button'

interface IFilTheFormJobReviewProps {
  setSelectedIndex: (prev: (prev: number) => number) => void
}

export const FilTheFormJobReview = ({ setSelectedIndex }: IFilTheFormJobReviewProps) => {
  const [t] = useTranslation()

  const { getValues } = useFormContext()

  const isOrganizationLoading = useAppSelector(applicationsSelector.isOrganizationLoading)
  const isJobSeekerLoading = useAppSelector(applicationsSelector.isJobSeekerLoading)

  const values = getValues()
  const changeJobDetails = () => {
    setSelectedIndex((prev) => prev - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col justify-between rounded-md border-2 border-gray-thin xl:flex-row xl:py-10">
        <div className="flex w-full flex-col p-5 xl:px-10 xl:pb-0 xl:pb-5">
          <div className="mb-5 flex w-full xl:border-b-2 xl:border-gray-thin xl:pb-2.5">
            <h2 className="text-base font-medium xl:text-lg">
              {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_DETAILS)}
            </h2>
          </div>
          <div className="border-b-2 border-gray-thin pb-5 xl:border-0 xl:pb-0">
            <div className="xl:[w-220px] mb-10 space-y-3">
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_TYPE)}
                </p>
                <p className="ml-2.5 text-base">{values.type.name}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_AREA)}
                </p>
                <p className="ml-2.5 text-base">{values.area.name}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_HOME_SECTIONS_EDUCATIONAL_INSTITUTES_TITLE)}
                </p>
                <p className="ml-2.5 text-base">{values.educationLevel.name}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_SALARY)}
                </p>
                <p className="ml-2.5 text-base">{values.expectedSalary}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_EXPERIENCE)}
                </p>
                <p className="ml-2.5 text-base">{values.experience.name}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_SCHEDULE)}
                </p>
                <p className="ml-2.5 text-base">{values.schedule.name}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_WORKPLACE)}
                </p>
                <p className="ml-2.5 text-base">{values.workplace.name}</p>
              </div>
            </div>
            <Button
              size="fl"
              variant="outlined"
              className="text-primary"
              onClick={changeJobDetails}
            >
              {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_DETAILS_BUTTON)}
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex w-full w-full max-w-[320px] justify-center">
        <Button
          disabled={isOrganizationLoading || isJobSeekerLoading}
          isLoading={isOrganizationLoading || isJobSeekerLoading}
          size="fl"
          type="submit"
        >
          {t(Translation.PAGE_FILL_THE_FORM_JOB_SUBMIT)}
        </Button>
      </div>
    </div>
  )
}
