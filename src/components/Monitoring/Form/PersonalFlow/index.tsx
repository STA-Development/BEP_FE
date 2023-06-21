import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import DifficultVacancies from '@components/Monitoring/Form/PersonalFlow/fields/DifficultVacancies'
import EmploymentMeans from '@components/Monitoring/Form/PersonalFlow/fields/EmploymentMeans'
import FiringReason from '@components/Monitoring/Form/PersonalFlow/fields/FiringReason'
import HasDifficultiesWithVacancies from '@components/Monitoring/Form/PersonalFlow/fields/HadDificultiesWithVacancies'
import HasFiredWorkers from '@components/Monitoring/Form/PersonalFlow/fields/HasFiredWorkers'
import HasNewEmployees from '@components/Monitoring/Form/PersonalFlow/fields/HasNewEmployees'
import NewEmployeePosition from '@components/Monitoring/Form/PersonalFlow/fields/NewEmployeePosition'
import PrimaryReason from '@components/Monitoring/Form/PersonalFlow/fields/PrimaryReason'
import StaffTrainingPeriod from '@components/Monitoring/Form/PersonalFlow/fields/StaffTrainingPeriouds'
import WorkChallengeAffects from '@components/Monitoring/Form/PersonalFlow/fields/WorkChallengeAffects'
import { Translation } from '@constants/translations'

const PersonalFlow = () => {
  const [t] = useTranslation()
  const { watch } = useFormContext()

  const isFiringReasonVisible = watch('hasFiredWorkers') === 'true'
  const hasNewEmployees = watch('hasNewEmployees') === 'true'
  const hasDifficultiesWithVacancies = watch('hadDifficultiesWithVacancies') === 'true'

  return (
    <div className="mx-auto flex w-full max-w-[400px] flex-col items-center">
      <div className="mb-5 flex justify-between text-xl">
        <p>{t(Translation.PAGE_MONITORING_SYSTEM_FORM_TITLE_PERSONAL_FLOW)}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <HasFiredWorkers />
        {isFiringReasonVisible ? <FiringReason /> : null}
        <HasNewEmployees />
        {hasNewEmployees ? (
          <>
            <NewEmployeePosition />
            <PrimaryReason />
            <HasDifficultiesWithVacancies />
            {hasDifficultiesWithVacancies ? (
              <>
                <DifficultVacancies />
                <EmploymentMeans />
                <WorkChallengeAffects />
              </>
            ) : null}
          </>
        ) : null}
        <StaffTrainingPeriod />
      </div>
    </div>
  )
}

export default PersonalFlow
