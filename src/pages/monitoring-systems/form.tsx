import React, { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Container } from '@components/Container'
import { Actions } from '@components/Monitoring/Form/actions'
import Introduction from '@components/Monitoring/Form/Introduction'
import OrganizationStructure from '@components/Monitoring/Form/OrganisationStructure'
import PersonalFlow from '@components/Monitoring/Form/PersonalFlow'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { monitoringMiddleware, monitoringSelector } from '@redux/slices/monitoring-systems'
import { Loading } from '@uiComponents/Loading'
import { monitoringValidationSchema } from '@validation/monitoring/monitoring'
import { AnyObjectSchema } from 'yup'

const MonitoringForm = () => {
  const [page, setPage] = useState<number>(1)
  const lastPage = 4
  const isMonitoringEnumsLoading = useAppSelector(monitoringSelector.isMonitoringEnumsLoading)

  const [currentSchema, setCurrentSchema] = useState<AnyObjectSchema>(monitoringValidationSchema[0])
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver<AnyObjectSchema>(currentSchema),
    defaultValues: {
      demandingProfessions: [{ value: '', count: null }],
      targetProfession: [{ value: '', count: null }],
      hasStudentsOrPractitioner: 'false',
      hasFiredWorkers: 'false',
      hasNewEmployees: 'false',
      hadDifficultiesWithVacancies: 'false',
      newEmployeePosition: [{ value: '', count: null }],
      difficultVacancies: [''],
    },
  })
  const { trigger } = methods
  const { handleSubmit } = methods

  const triggerSchema = useCallback(
    () => async () => {
      await trigger([])
    },
    [trigger]
  )

  useEffect(() => {
    triggerSchema()
  }, [currentSchema, trigger, triggerSchema])

  const onSubmit = async (values: never) => {
    console.log(values)
    // if (page !== lastPage) {
    //   setPage(page + 1)
    //   setCurrentSchema(monitoringValidationSchema[1])
    // }
  }

  useEffect(() => {
    dispatch(monitoringMiddleware.getMonitoringEnums())
  }, [])

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
