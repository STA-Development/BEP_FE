import React, { useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IOrganizationApplicationForm } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { AreaOfSpecialization } from '@components/AreaOfSpecialization'
import { Container } from '@components/Container'
import { FilTheFormJobReview } from '@components/FilTheFormJobReview'
import { LeftIcon } from '@components/Icons/LeftIcon'
import { type } from '@constants/applications'
import {
  area,
  educationLevel,
  expectedSalary,
  experience,
  schedule,
  workplace,
} from '@constants/filTheForm'
import { Translation } from '@constants/translations'
import { Tab } from '@headlessui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { applicationsMiddleware, applicationsSelector } from '@redux/slices/applications'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { jobSeekerValidationSchema } from '@validation/jobSeeker/jobSeeker'
import { useRouter } from 'next/router'

const IndividualApplication = () => {
  const [t] = useTranslation()
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const router = useRouter()
  const applicationId = router.query.id

  const { isJobSeekerSubmitSuccess, individualApplication } = useAppSelector(
    applicationsSelector.applications
  )
  const { role } = useAppSelector(usersSelector.user)

  const defaultValues = useMemo(
    () => ({
      type: type.find((item) => item.name === individualApplication?.type),
      area: area.find((item) => item.name === individualApplication?.area),
      educationLevel: educationLevel.find(
        (item) => item.name === individualApplication?.educationLevel
      ),
      experience: experience.find((item) => item.name === individualApplication?.experience),
      schedule: schedule.find((item) => item.name === individualApplication?.schedule),
      workplace: workplace.find((item) => item.name === individualApplication?.workplace),
      expectedSalary: expectedSalary.find(
        (item) => item.name === individualApplication?.expectedSalary
      ),
    }),
    [individualApplication]
  )

  const methods = useForm<IOrganizationApplicationForm>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(jobSeekerValidationSchema),
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: IOrganizationApplicationForm) => {
    const areaSpecialization = {
      ...data,
      type: data?.type?.name,
      area: data?.area?.name,
      educationLevel: data?.educationLevel?.name,
      experience: data?.experience?.name,
      schedule: data?.schedule?.name,
      workplace: data?.workplace?.name,
      expectedSalary: data?.expectedSalary?.name,
      uuid: individualApplication?.uuid,
    }

    if (role === Roles.JobSeeker) {
      dispatch(applicationsMiddleware.upDateJobSeekerIndividualApplication(areaSpecialization))
    } else if (role === Roles.Organization) {
      dispatch(applicationsMiddleware.upDateOrganizationIndividualApplication(areaSpecialization))
    }
  }

  useEffect(() => {
    if (isJobSeekerSubmitSuccess) {
      if (role === Roles.JobSeeker) {
        dispatch(applicationsMiddleware.resetJobSeekerSubmitSuccess())
      } else {
        dispatch(applicationsMiddleware.resetOrganizationSubmitSuccess())
      }

      router.push('/profile/applications')
      reset(defaultValues)
    }

    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValues, isJobSeekerSubmitSuccess, reset, role])

  useEffect(() => {
    if (applicationId) {
      if (role === Roles.JobSeeker) {
        dispatch(applicationsMiddleware.getJobSeekerIndividualApplication(applicationId as string))
      } else if (role === Roles.Organization) {
        dispatch(
          applicationsMiddleware.getOrganizationIndividualApplication(applicationId as string)
        )
      }
    }
  }, [applicationId, role])

  useEffect(() => {
    reset(defaultValues)
  }, [defaultValues, individualApplication, reset])

  const handleGoBack = () => {
    router.back()
  }

  return (
    <Container className="mb-30 mt-15 pb-20">
      <div className="mb-10 flex justify-between">
        <Button
          variant="text"
          LeftIcon={LeftIcon}
          onClick={handleGoBack}
        >
          {t(Translation.PAGE_FILL_THE_FORM_ACTIONS_GO_BACK)}
        </Button>
      </div>
      <div className="mx-auto flex w-full max-w-[380px] flex-col items-center">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="hidden">
            <Tab>{t(Translation.PAGE_FILL_THE_FORM_JOB_TABS)} 1</Tab>
            <Tab>{t(Translation.PAGE_FILL_THE_FORM_JOB_TABS)} 2</Tab>
          </Tab.List>
          <Tab.Panels>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Tab.Panel>
                  <div className="mb-5 flex justify-between text-xl">
                    <p>{t(Translation.PAGE_FILL_THE_FORM_JOB_ONE_TITLE)}</p>
                    <p className="text-primary">1/2</p>
                  </div>
                  <div>
                    <AreaOfSpecialization setSelectedIndex={setSelectedIndex} />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="mb-5 flex justify-between text-xl">
                    <p>{t(Translation.PAGE_FILL_THE_FORM_JOB_ONE_TITLE)}</p>
                    <p className="text-primary">2/2</p>
                  </div>
                  <div>
                    <FilTheFormJobReview setSelectedIndex={setSelectedIndex} />
                  </div>
                </Tab.Panel>
              </form>
            </FormProvider>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Container>
  )
}

export default IndividualApplication
