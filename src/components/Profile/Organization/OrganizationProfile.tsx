import React, { useEffect, useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { IProfileUpdateProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { EmployeeQuantity } from '@components/Profile/Organization/Fields/EmployeeQuantity'
import { OrganizationType } from '@components/Profile/Organization/Fields/OrganizationType'
import {
  defaultValues,
  IOrganizationProfile,
  IOrganizationProfileForm,
} from '@components/Profile/Organization/helper'
import { Address } from '@components/Profile/shared/Fields/Address'
import { Email } from '@components/Profile/shared/Fields/Email'
import { FullName } from '@components/Profile/shared/Fields/FullName'
import { Phone } from '@components/Profile/shared/Fields/Phone'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { usersMiddleware, usersSelector } from '@redux/slices/users'
import { organizationValidationSchema } from '@validation/profile/organization'

export const OrganizationProfile = () => {
  const { name, email, phone, organizationType, employeeQuantity, address } = useAppSelector(
    usersSelector.user
  )

  const values = useMemo<IOrganizationProfile>(
    () => ({
      name,
      email,
      phone,
      password: '********',
      organizationType,
      employeeQuantity,
      address,
    }),
    [name, email, phone, organizationType, employeeQuantity, address]
  )
  const methods = useForm<IOrganizationProfileForm>({
    defaultValues: defaultValues(values),
    mode: 'onSubmit',
    resolver: yupResolver(organizationValidationSchema),
  })

  const onSubmit = (data: IOrganizationProfileForm) => {
    const field = Object.entries(data).find((e) => e[1].active)
    const params = {
      keyValuePair: { key: field?.[0], value: field?.[1].value?.name ?? field?.[1].value },
    }

    dispatch(usersMiddleware.updateOrganizationProfile(params as IProfileUpdateProps))
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
          <tbody className="divide-y divide-gray-thin">
            <FullName />
            <Email />
            <Phone />
            <Address />
            <EmployeeQuantity />
            <OrganizationType />
          </tbody>
        </table>
      </form>
    </FormProvider>
  )
}
