import React, { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Container } from '@components/Container'
import { Actions } from '@components/Monitoring/Form/actions'
import { defaultValues } from '@components/Monitoring/Form/helper'
import Introduction from '@components/Monitoring/Form/Introduction'
import OrganizationStructure from '@components/Monitoring/Form/OrganisationStructure'
import OrganizationPlans from '@components/Monitoring/Form/OrganizationPlans'
import PersonalFlow from '@components/Monitoring/Form/PersonalFlow'
import Vacancies from '@components/Monitoring/Form/Vacancies'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppSelector } from '@redux/hooks'
import { monitoringSelector } from '@redux/slices/monitoring-systems'
import { Loading } from '@uiComponents/Loading'
import { monitoringValidationSchema } from '@validation/monitoring/monitoring'
import { AnyObjectSchema } from 'yup'

const MonitoringForm = () => {
  const [page, setPage] = useState<number>(1)
  const lastPage = 6
  const isMonitoringEnumsLoading = useAppSelector(monitoringSelector.isMonitoringEnumsLoading)
  const monitoringEnums = useAppSelector(monitoringSelector.monitoringEnums)
  const [currentSchema, setCurrentSchema] = useState<AnyObjectSchema>(monitoringValidationSchema[0])
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver<AnyObjectSchema>(currentSchema),
    defaultValues,
  })
  const { trigger, reset, handleSubmit } = methods

  const triggerSchema = useCallback(
    () => async () => {
      await trigger([])
    },
    [trigger]
  )

  useEffect(() => {
    triggerSchema()
  }, [currentSchema, trigger, triggerSchema])

  useEffect(() => {
    const businessPerspective = monitoringEnums?.businessPerspective.map((item) => ({
      fieldName: item.id,
      value: false,
    }))
    const positionNecessityReason = monitoringEnums?.positionNecessityReason.map((item) => ({
      fieldName: item.id,
      value: false,
    }))

    reset({ ...defaultValues, businessPerspective, positionNecessityReason })
  }, [monitoringEnums, reset])

  const onSubmit = async (values: never) => {
    console.log(values)
    // if (page !== lastPage) {
    //   setPage(page + 1)
    //   setCurrentSchema(monitoringValidationSchema[1])
    // }
  }
  //
  // useEffect(() => {
  //   dispatch(monitoringMiddleware.getMonitoringEnums())
  // }, [])

  return (
    <Container className="mt-20">
      <FormProvider {...methods}>
        {isMonitoringEnumsLoading ? (
          <Loading />
        ) : (
          // @ts-ignore
          <form onSubmit={handleSubmit(onSubmit)}>
            {page === 1 ? <Introduction /> : null}
            {page === 2 ? <OrganizationStructure /> : null}
            {page === 3 ? <PersonalFlow /> : null}
            {page === 4 ? <Vacancies /> : null}
            {page === 5 ? <OrganizationPlans /> : null}
            <Actions
              page={page}
              setPage={setPage}
              setCurrentSchema={setCurrentSchema}
              lastPage={lastPage}
            />
          </form>
        )}
      </FormProvider>
    </Container>
  )
}

export default MonitoringForm
