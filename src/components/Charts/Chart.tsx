import React from 'react'
import { useTranslation } from 'react-i18next'
import { Translation } from '@constants/translations'
import Highcharts from 'highcharts'
import Chart from 'highcharts-react-official'

interface IChartComponentProps {
  years: number[]
  percentages: number[]
  counts: number[]
}

export const ChartComponent = ({ years, percentages, counts }: IChartComponentProps) => {
  const [t] = useTranslation()

  const options = {
    title: {
      text: t(Translation.PAGE_MONITORING_SYSTEM_CHART_TITLE),
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
        data: percentages,
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
