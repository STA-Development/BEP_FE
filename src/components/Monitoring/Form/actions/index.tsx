import React, { useCallback } from 'react'
import { useFormState } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import { monitoringValidationSchema } from '@validation/monitoring/monitoring'
import { AnyObjectSchema } from 'yup'

interface ActionsParams {
  page: number
  setPage: (value: number) => void
  lastPage: number
  setCurrentSchema: (value: AnyObjectSchema) => void
}

export const Actions = ({ page, setPage, lastPage, setCurrentSchema }: ActionsParams) => {
  const isFirstPage = page === 1
  const isPrevVisible = page !== 1
  const isSubmitVisible = page === lastPage
  const { isValid } = useFormState()
  const [t] = useTranslation()

  const onPrevClick = useCallback(() => {
    setCurrentSchema(monitoringValidationSchema[page - 2] as AnyObjectSchema)
    setPage(page - 1)
  }, [page, setCurrentSchema, setPage])

  const onNextClick = useCallback(() => {
    // eslint-disable-next-line security/detect-object-injection
    setCurrentSchema(monitoringValidationSchema[page] as AnyObjectSchema)
    setPage(page + 1)
  }, [page, setCurrentSchema, setPage])

  return (
    <div className="mt-3 flex justify-center gap-x-2 gap-y-2">
      <div className={`grid ${isFirstPage ? 'grid-cols-1' : 'grid-cols-2'} gap-x-2 gap-y-2`}>
        {isPrevVisible ? (
          <Button
            variant="outlined"
            size="xs"
            color="primary"
            onClick={onPrevClick}
          >
            {t(Translation.PAGE_MONITORING_SYSTEM_FORM_ACTIONS_PREVIOUS)}
          </Button>
        ) : null}
        {isSubmitVisible ? (
          <Button type="submit">{t(Translation.PAGE_MONITORING_SYSTEM_FORM_ACTIONS_SUBMIT)}</Button>
        ) : (
          <Button
            onClick={onNextClick}
            disabled={!isValid}
          >
            {t(Translation.PAGE_MONITORING_SYSTEM_FORM_ACTIONS_NEXT)}
          </Button>
        )}
      </div>
    </div>
  )
}
