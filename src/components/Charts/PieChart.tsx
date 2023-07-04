import React from 'react'
import { useTranslation } from 'react-i18next'
import { SexAtBirth } from '@allTypes/reduxTypes/usersStateTypes'
import { Translation } from '@constants/translations'
import Highcharts from 'highcharts'
import Chart from 'highcharts-react-official'

export const PieChart = ({ male, female }: { male: number | null; female: number | null }) => {
  const [t] = useTranslation()

  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: t(Translation.PAGE_MONITORING_SYSTEM_PIE_CHART_TITLE),
    },
    series: [
      {
        name: 'Students',
        data: [
          { name: SexAtBirth.Male, y: male },
          { name: SexAtBirth.Female, y: female },
        ],
        pointInterval: 1,
        pointStart: 0,
      },
    ],
    credits: {
      enabled: false,
    },
  }

  return (
    <div>
      <Chart
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )
}
