import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IJobSeekerProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons/LeftIcon'
import { FilTheFormOrganizationReview, OrganizationForm } from '@components/Organization'
import {
  area,
  educationLevel,
  expectedSalary,
  experience,
  schedule,
  type,
  workplace,
} from '@constants/filTheForm'
import { Translation } from '@constants/translations'
import { Tab } from '@headlessui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { applicationsMiddleware, applicationsSelector } from '@redux/slices/applications'
import { Button } from '@uiComponents/Button'
import { jobSeekerValidationSchema } from '@validation/jobSeeker/jobSeeker'
import { useRouter } from 'next/router'

const defaultValues = {
  type: type[0]?.name,
  area: area[0]?.name,
  educationLevel: educationLevel[0]?.name,
  experience: experience[0]?.name,
  schedule: schedule[0]?.name,
  workplace: workplace[0]?.name,
  expectedSalary: expectedSalary[0]?.name,
}

const FillTheForm = () => {
  const [t] = useTranslation()

  const [selectedIndex, setSelectedIndex] = useState(0)

  const router = useRouter()

  const { isOrganizationSubmitSuccess } = useAppSelector(applicationsSelector.organization)

  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(jobSeekerValidationSchema),
  })

  const { handleSubmit, reset } = methods

  const onSubmit = (data: IJobSeekerProps) => {
    const areaSpecialization = {
      ...data,
      isActive: true,
      postedAt: '2023-05-02',
      status: 'Pending',
    }

    dispatch(applicationsMiddleware.organization(areaSpecialization))
  }

  useEffect(() => {
    if (isOrganizationSubmitSuccess) {
      dispatch(applicationsMiddleware.resetOrganizationSubmitSuccess())
      router.push('/profile/applications')
      reset(defaultValues)
    }
  }, [isOrganizationSubmitSuccess, reset, router])

  return (
    <Container className="mb-30 mt-15 pb-20">
      <div className="mb-10 flex justify-between">
        <Button
          variant="text"
          LeftIcon={LeftIcon}
          disabled={selectedIndex === 0}
          onClick={() => {
            setSelectedIndex((prev) => prev - 1)
          }}
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
                    <OrganizationForm setSelectedIndex={setSelectedIndex} />
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="mb-5 flex justify-between text-xl">
                    <p>{t(Translation.PAGE_FILL_THE_FORM_JOB_ONE_TITLE)}</p>
                    <p className="text-primary">2/2</p>
                  </div>
                  <div>
                    <FilTheFormOrganizationReview setSelectedIndex={setSelectedIndex} />
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

export default FillTheForm
