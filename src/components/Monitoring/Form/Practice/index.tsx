import React from 'react'
import { useTranslation } from 'react-i18next'
import HasFiredWorkers from '@components/Monitoring/Form/PersonalFlow/fields/HasFiredWorkers'
import { Translation } from '@constants/translations'

const Practice = () => {
  const [t] = useTranslation()

  // TODO: Finalize practice page
  return (
    <div className="mx-auto flex w-full max-w-[400px] flex-col items-center">
      <div className="mb-5 flex justify-between text-xl">
        <p>{t(Translation.PAGE_MONITORING_SYSTEM_FORM_TITLE_PERSONAL_FLOW)}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <HasFiredWorkers />
      </div>
    </div>
  )
}

export default Practice
