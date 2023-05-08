import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IJobSeekerProfileProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { Email } from '@components/Profile/JobSeeker/Fields/Email'
import { FullName } from '@components/Profile/JobSeeker/Fields/FullName'
import { Phone } from '@components/Profile/JobSeeker/Fields/Phone'
import {
  defaultValues,
  IJobSeekerProfile,
  IJobSeekerProfileForm,
} from '@components/Profile/JobSeeker/helper'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { jobSeekerValidationSchema } from '@validation/profile/jobSeeker'

export const JobSeekerProfile = () => {
  const { name, email, phone } = useAppSelector(usersSelector.user)
  const values = useMemo<IJobSeekerProfile>(
    () => ({ name, email, phone, password: '********' }),
    [name, email, phone]
  )
  const methods = useForm({
    defaultValues: defaultValues(values),
    mode: 'onSubmit',
    resolver: yupResolver(jobSeekerValidationSchema),
  })

  const onSubmit = (data: IJobSeekerProfileForm) => {
    const field = Object.keys(data).find(
      (key) =>
        // TODO: fix this
        // @ts-ignore
        data?.[key]?.active
    )

    // @ts-ignore
    const params = { key: field, value: data[field].value }

    console.log(params)
    dispatch(usersMiddleware.updateJobSeekerProfile(params as IJobSeekerProfileProps))
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
        </table>
      </form>
    </FormProvider>
  )
}
