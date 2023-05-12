import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IProfileUpdateProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import {
  defaultValues,
  IJobSeekerProfile,
  IJobSeekerProfileForm,
} from '@components/Profile/JobSeeker/helper'
import { Address } from '@components/Profile/shared/Fields/Address'
import { Email } from '@components/Profile/shared/Fields/Email'
import { FullName } from '@components/Profile/shared/Fields/FullName'
import { Phone } from '@components/Profile/shared/Fields/Phone'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { jobSeekerValidationSchema } from '@validation/profile/jobSeeker'

export const JobSeekerProfile = () => {
  const { name, email, phone, address } = useAppSelector(usersSelector.user)
  const values = useMemo<IJobSeekerProfile>(
    () => ({ name, email, phone, password: '********', address }),
    [name, email, phone, address]
  )
  const methods = useForm({
    defaultValues: defaultValues(values),
    mode: 'onSubmit',
    resolver: yupResolver(jobSeekerValidationSchema),
  })

  const onSubmit = (data: IJobSeekerProfileForm) => {
    const field = Object.entries(data).find((e) => e[1].active)
    const params = { keyValuePair: { key: field?.[0], value: field?.[1].value } }

    dispatch(usersMiddleware.updateJobSeekerProfile(params as IProfileUpdateProps))
  }

  useEffect(() => {
    methods.reset({ ...defaultValues(values) })
  }, [methods, values])

  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="divide-y divide-gray-thin"
      >
        <table className="w-full table-auto">
          <tbody className="divide-y divide-gray-thin" />
          <FullName />
          <Email />
          <Phone />
          <Address />
        </table>
      </form>
    </FormProvider>
  )
}
