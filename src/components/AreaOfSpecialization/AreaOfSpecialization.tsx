import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { IJobSeekerProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
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
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@uiComponents/Button'
import { Select } from '@uiComponents/Select'
import { jobSeekerValidationSchema } from '@validation/jobSeeker/jobSeeker'

interface IAreaOfSpecialization {
  setSelectedIndex: (prev: (prev: number) => number) => void
  setJobSeekerReview: (value: IJobSeekerProps) => void
  jobSeekerReview: IJobSeekerProps | null
}

const defaultValues = {
  type: type[0]?.name,
  area: area[0]?.name,
  educationLevel: educationLevel[0]?.name,
  experience: experience[0]?.name,
  schedule: schedule[0]?.name,
  workplace: workplace[0]?.name,
  expectedSalary: expectedSalary[0]?.name,
}

export const AreaOfSpecialization = ({
  setSelectedIndex,
  setJobSeekerReview,
  jobSeekerReview,
}: IAreaOfSpecialization) => {
  const [t] = useTranslation()

  const methods = useForm({
    defaultValues: jobSeekerReview ?? defaultValues,
    mode: 'onSubmit',
    resolver: yupResolver(jobSeekerValidationSchema),
  })

  const { handleSubmit } = methods

  const onSubmit = (data: IJobSeekerProps) => {
    const areaSpecialization = {
      ...data,
      isActive: true,
      postedAt: '2023-05-02',
      status: 'Pending',
    }

    setJobSeekerReview(areaSpecialization)
    setSelectedIndex((prev: number) => (prev > 1 ? 1 : prev) + 1)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 w-full">
          <Select
            items={type}
            fieldName="type"
          />
        </div>
        <div className="mb-5 w-full">
          <Select
            items={area}
            fieldName="area"
          />
        </div>
        <div className="mb-5 w-full">
          <Select
            items={educationLevel}
            fieldName="educationLevel"
          />
        </div>
        <div className="mb-5 w-full">
          <Select
            items={experience}
            fieldName="experience"
          />
        </div>
        <div className="mb-5 w-full">
          <Select
            items={schedule}
            fieldName="schedule"
          />
        </div>
        <div className="mb-5 w-full">
          <Select
            items={workplace}
            fieldName="workplace"
          />
        </div>
        <div className="mb-5 w-full">
          <Select
            items={expectedSalary}
            fieldName="expectedSalary"
          />
        </div>
        <div>
          <Button
            size="fl"
            type="submit"
          >
            {t(Translation.PAGE_FILL_THE_FORM_ACTIONS_NEXT)}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
