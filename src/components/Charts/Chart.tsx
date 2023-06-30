import React from 'react'
import { useTranslation } from 'react-i18next'
import { SexAtBirth } from '@allTypes/reduxTypes/usersStateTypes'
import { Translation } from '@constants/translations'
import Highcharts from 'highcharts'
import Chart from 'highcharts-react-official'

interface IChartComponentProps {
  years: string[]
  percentages: number[]
  counts: number[]
  percentagesChartFemale: number[]
}

export const ChartComponent = ({
  years,
  percentages,
  counts,
  percentagesChartFemale,
}: IChartComponentProps) => {
  console.log(percentages)

  const [t] = useTranslation()

  const options: Highcharts.Options = {
    title: {
      text: t(Translation.PAGE_MONITORING_SYSTEM_CHART_TITLE) as string,
    },
    xAxisTitle: 'f',
    xAxis: {
      categories: years,
    },
    // @ts-ignore
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        formatter(value: { axis: { tickPositions: string }; pos: string }) {
          const index = value.axis.tickPositions.indexOf(value.pos)

          counts.sort((a, b) => a - b)

          return counts[index]
        },
      },
    },
    series: [
      {
        name: SexAtBirth.Male,
        type: 'line',
        // eslint-disable-next-line @typescript-eslint/ban-types
        data: percentages,
        pointInterval: 1,
        pointStart: 0,
      },
      {
        type: 'line',
        // eslint-disable-next-line @typescript-eslint/ban-types
        data: percentagesChartFemale,
        pointInterval: 1,
        pointStart: 0,
        name: SexAtBirth.Female,
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
