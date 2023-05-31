import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'

interface ActionsParams {
  page: number
  setPage: (value: number) => void
  lastPage: number
}

export const Actions = ({ page, setPage, lastPage }: ActionsParams) => {
  const isFirstPage = page === 1
  const isPrevVisible = page !== 1
  const isSubmitVisible = page === lastPage
  const [t] = useTranslation()

  const onPrevClick = useCallback(() => {
    setPage(page - 1)
  }, [page, setPage])

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
          <Button type="submit">{t(Translation.PAGE_MONITORING_SYSTEM_FORM_ACTIONS_NEXT)}</Button>
        )}
      </div>
    </div>
  )
}
