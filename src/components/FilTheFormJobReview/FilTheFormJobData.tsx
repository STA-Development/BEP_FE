import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { IJobSeekerProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { jobSeekerMiddleware, jobSeekerSelector } from '@redux/slices/areaSpecialization'
import { Button } from '@uiComponents/Button'
import { useRouter } from 'next/router'

interface IFilTheFormJobReviewProps {
  jobSeekerReview: IJobSeekerProps | null
  setSelectedIndex: (prev: (prev: number) => number) => void
}

export const FilTheFormJobReview = ({
  jobSeekerReview,
  setSelectedIndex,
}: IFilTheFormJobReviewProps) => {
  const [t] = useTranslation()

  const router = useRouter()

  const { isJobSeekerSubmitSuccess } = useAppSelector(jobSeekerSelector.jobSeeker)

  const onSubmite = () => {
    if (jobSeekerReview) {
      dispatch(jobSeekerMiddleware.areaSpecialization(jobSeekerReview))
    }
  }

  const changeJobDetails = () => {
    setSelectedIndex((prev) => prev - 1)
  }

  useEffect(() => {
    if (isJobSeekerSubmitSuccess) {
      dispatch(jobSeekerMiddleware.resetJobSeekerSubmitSuccess())
      router.push('/')
    }
  }, [isJobSeekerSubmitSuccess, router])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-full flex-col justify-between rounded-md border-2 border-gray-thin xl:flex-row xl:py-10">
        <div className="flex w-full flex-col p-5 xl:px-10 xl:pb-0 xl:pb-5">
          <div className="mb-5 flex w-full xl:border-b-2 xl:border-gray-thin xl:pb-2.5">
            <h2 className="text-base font-medium xl:text-lg">
              {' '}
              {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_DETAILS)}
            </h2>
          </div>
          <div className="border-b-2 border-gray-thin pb-5 xl:border-0 xl:pb-0">
            <div className="xl:[w-220px] mb-10 space-y-3">
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_TYPE)}
                </p>
                <p className="ml-2.5 text-base">{jobSeekerReview?.type}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_AREA)}
                </p>
                <p className="ml-2.5 text-base">{jobSeekerReview?.area}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_SALARY)}
                </p>
                <p className="ml-2.5 text-base">{jobSeekerReview?.expectedSalary}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_EXPERIENCE)}
                </p>
                <p className="ml-2.5 text-base">{jobSeekerReview?.experience}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_POSTED_DATE)}
                </p>
                <p className="ml-2.5 text-base">{jobSeekerReview?.postedAt}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_SCHEDULE)}
                </p>
                <p className="ml-2.5 text-base">{jobSeekerReview?.schedule}</p>
              </div>
              <div className="flex flex-row flex-wrap">
                <p className="text-base text-black-light">
                  {t(Translation.PAGE_FILL_THE_FORM_JOB_TWO_WORKPLACE)}
                </p>
                <p className="ml-2.5 text-base">{jobSeekerReview?.workplace}</p>
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
          size="fl"
          onClick={onSubmite}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
