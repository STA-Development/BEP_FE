import React from 'react'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import Highcharts from 'highcharts'
import Chart from 'highcharts-react-official'

export const ColumnChart = ({
  years,
  counts,
  female,
  male,
}: {
  years: string[]
  counts: number[]
  female: number[]
  male: number[]
}) => {
  const [t] = useTranslation()
  const options = {
    chart: {
      type: 'column',
    },
    title: {
      text: t(Translation.PAGE_MONITORING_SYSTEM_COLUMN_CHART_TITLE),
    },
    xAxis: {
      categories: years,
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        formatter(value: { axis: { tickPositions: string }; pos: string }) {
          const index = value.axis.tickPositions.indexOf(value.pos)

          return counts[index]
        },
      },
    },
    series: [
      {
        name: 'Male',
        data: male,
        pointInterval: 1,
        pointStart: 0,
      },
      {
        name: 'Female',
        data: female,
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
