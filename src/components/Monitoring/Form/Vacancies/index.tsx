import React from 'react'
import { useFormContext } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import HasVacancies from '@components/Monitoring/Form/Vacancies/fields/HaveVacancies'
import Vacancy from '@components/Monitoring/Form/Vacancies/fields/Vacancy'
import VacancyCountByField from '@components/Monitoring/Form/Vacancies/fields/VacancyCountByField'
import VacancyData from '@components/Monitoring/Form/Vacancies/fields/VacancyData'
import { Translation } from '@constants/translations'

const Vacancies = () => {
  const [t] = useTranslation()
  const { watch } = useFormContext()

  const haveVacancy = watch('haveVacancies') === 'true'

  return (
    <div className="mx-auto flex w-full max-w-[400px] flex-col items-center">
      <div className="mb-5 flex justify-between text-xl">
        <p>{t(Translation.PAGE_MONITORING_SYSTEM_FORM_TITLE_VACANCIES)}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4">
        <HasVacancies />
        {haveVacancy ? <Vacancy /> : null}
        <VacancyCountByField />
        <VacancyData />
      </div>
    </div>
  )
}

export default Vacancies
