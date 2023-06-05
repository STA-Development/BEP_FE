import React, { useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IOrganizationApplicationForm } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { AreaOfSpecialization } from '@components/AreaOfSpecialization'
import { Container } from '@components/Container'
import { FilTheFormJobReview } from '@components/FilTheFormJobReview'
import { LeftIcon } from '@components/Icons/LeftIcon'
import {
  area,
  educationLevel,
  expectedSalary,
  experience,
  schedule,
  type,
  workplace,
} from '@constants/applications'
import { Translation } from '@constants/translations'
import { Tab } from '@headlessui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { applicationsMiddleware, applicationsSelector } from '@redux/slices/applications'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { jobSeekerValidationSchema } from '@validation/jobSeeker/jobSeeker'
import { useRouter } from 'next/router'

const FillTheForm = () => {
  const [t] = useTranslation()

  const router = useRouter()
  const path = router.query?.path as string

  const defaultValues = useMemo(
    () => ({
      type: path ? type.find((item) => item.name === path) : type[0],
      area: area[0],
      educationLevel: educationLevel[0],
      experience: experience[0],
      schedule: schedule[0],
      workplace: workplace[0],
      expectedSalary: expectedSalary[0],
    }),
    [path]
  )

  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const { role } = useAppSelector(usersSelector.user)

  const { isJobSeekerSubmitSuccess, isOrganizationSubmitSuccess } = useAppSelector(
    applicationsSelector.applications
  )

  const methods = useForm<IOrganizationApplicationForm>({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(jobSeekerValidationSchema),
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: IOrganizationApplicationForm) => {
    const areaSpecialization = {
      type: data?.type?.name,
      area: data?.area?.name,
      educationLevel: data?.educationLevel?.name,
      experience: data?.experience?.name,
      schedule: data?.schedule?.name,
      workplace: data?.workplace?.name,
      expectedSalary: data?.expectedSalary?.name,
    }

    if (role === Roles.JobSeeker) {
      dispatch(applicationsMiddleware.jobSeeker(areaSpecialization))
    } else if (role === Roles.Organization) {
      dispatch(applicationsMiddleware.organization(areaSpecialization))
    }
  }

  useEffect(() => {
    if (isJobSeekerSubmitSuccess || isOrganizationSubmitSuccess) {
      if (role === Roles.JobSeeker) {
        dispatch(applicationsMiddleware.resetJobSeekerSubmitSuccess())
      } else if (role === Roles.Organization) {
        dispatch(applicationsMiddleware.resetOrganizationSubmitSuccess())
      }

      router.push('/profile/applications')
      reset(defaultValues)
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isJobSeekerSubmitSuccess, reset, isOrganizationSubmitSuccess, role])

  const handleGoBack = () => {
    router.back()
  }

  return (
    <Container className="mb-30 mt-15 pb-20">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              </Tab.Panels>
            </Tab.Group>
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}

export default FillTheForm
