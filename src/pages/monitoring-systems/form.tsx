import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Container } from '@components/Container'
import { Actions } from '@components/Monitoring/Form/actions'
import Introduction from '@components/Monitoring/Form/Introduction'
import OrganizationStructure from '@components/Monitoring/Form/OrganisationStructure'
import { yupResolver } from '@hookform/resolvers/yup'
import { dispatch, useAppSelector } from '@redux/hooks'
import { monitoringMiddleware, monitoringSelector } from '@redux/slices/monitoring-systems'
import { Loading } from '@uiComponents/Loading'
import { monitoringValidationSchema } from '@validation/monitoring/monitoring'

const MonitoringForm = () => {
  const [page, setPage] = useState<number>(1)
  const lastPage = 3
  const isMonitoringEnumsLoading = useAppSelector(monitoringSelector.isMonitoringEnumsLoading)

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(monitoringValidationSchema[0]),
  })
  const { handleSubmit } = methods

  const onSubmit = (values: never) => {
    console.log(values)

    if (page !== lastPage) {
      setPage(page + 1)
    }
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
            <Actions
              page={page}
              setPage={setPage}
              lastPage={lastPage}
            />
          </form>
        )}
      </FormProvider>
    </Container>
  )
}

export default MonitoringForm
