import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import Highcharts from 'highcharts'
// eslint-disable-next-line import/no-extraneous-dependencies
import Chart from 'highcharts-react-official'

const yAxisLabels = [23063.0, 23228.0, 24854.0, 28399.0, 31159.0] // Array of y-axis label values
const seriesData = [90.4, 100.7, 107, 114.3, 109.7] // Array of series data values
const years = [2017, 2018, 2019, 2020, 2021]

const options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Միջին մասնագիտական ուսումնական հաստատությունների ուսանողների թվաքանակը, ընդամենը',
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

        return yAxisLabels[index]
      },
    },
  },
  series: [
    {
      name: 'Tokyo',
      data: seriesData,
      pointInterval: 1,
      pointStart: 0,
    },
    {
      name: 'New York',
      data: seriesData,
      pointInterval: 1,
      pointStart: 0,
    },
  ],
  credits: {
    enabled: false,
  },
}

export const ColumnChart = () => (
  <div>
    <Chart
      highcharts={Highcharts}
      options={options}
    />
  </div>
)
