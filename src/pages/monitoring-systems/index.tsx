import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SexAtBirth } from '@allTypes/reduxTypes/usersStateTypes'
import { ChartComponent, ColumnChart, PieChart } from '@components/Charts'
import { Tab } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { monitoringMiddleware, monitoringSelector } from '@redux/slices/monitoring-systems'

const tabs = [
  {
    label: 'Tab 1',
    title: 'Monitoring Systems 1',
    content:
      'Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. Fringilla ultricies et nulla mauris nunc nullam viverra. Malesuada vel cursus dignissim quisque est. Cursus enim aliquet platea mauris elit est. Id elementum tincidunt tellus quisque nibh vulputate mi. Magnis et congue enim augue amet.\n' +
      'Mi tortor in nam ac. Pretium curabitur id cras cursus ac imperdiet ultricies. Pretium ut velit integer nibh.',
    content2:
      'Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. ',
    content3:
      'Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. Fringilla ultricies et nulla mauris nunc nullam viverra. Malesuada vel cursus dignissim quisque est. Cursus enim aliquet platea mauris elit est. Id elementum tincidunt tellus quisque nibh vulputate mi. Magnis et congue enim augue amet.\n' +
      'Mi tortor in nam ac. Pretium curabitur id cras cursus ac imperdiet ultricies. Pretium ut velit integer nibh.',
  },
  {
    label: 'Tab 2',
    title: 'Monitoring Systems 2',
    content:
      'Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. Fringilla ultricies et nulla mauris nunc nullam viverra. Malesuada vel cursus dignissim quisque est. Cursus enim aliquet platea mauris elit est. Id elementum tincidunt tellus quisque nibh vulputate mi. Magnis et congue enim augue amet.\n' +
      'Mi tortor in nam ac. Pretium curabitur id cras cursus ac imperdiet ultricies. Pretium ut velit integer nibh.',
    content2:
      'Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. ',
    content3:
      'Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. Fringilla ultricies et nulla mauris nunc nullam viverra. Malesuada vel cursus dignissim quisque est. Cursus enim aliquet platea mauris elit est. Id elementum tincidunt tellus quisque nibh vulputate mi. Magnis et congue enim augue amet.\n' +
      'Mi tortor in nam ac. Pretium curabitur id cras cursus ac imperdiet ultricies. Pretium ut velit integer nibh.',
  },
  {
    label: 'Tab 3',
    title: 'Monitoring Systems 3',
    content:
      'Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. Fringilla ultricies et nulla mauris nunc nullam viverra. Malesuada vel cursus dignissim quisque est. Cursus enim aliquet platea mauris elit est. Id elementum tincidunt tellus quisque nibh vulputate mi. Magnis et congue enim augue amet.\n' +
      'Mi tortor in nam ac. Pretium curabitur id cras cursus ac imperdiet ultricies. Pretium ut velit integer nibh.',
    content2:
      'Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. ',
    content3:
      'Lorem ipsum dolor sit amet consectetur. Nisl turpis quis ac euismod sodales. At in iaculis id non lobortis eu posuere urna sit. Et aliquam ultrices sed proin. Fringilla ultricies et nulla mauris nunc nullam viverra. Malesuada vel cursus dignissim quisque est. Cursus enim aliquet platea mauris elit est. Id elementum tincidunt tellus quisque nibh vulputate mi. Magnis et congue enim augue amet.\n' +
      'Mi tortor in nam ac. Pretium curabitur id cras cursus ac imperdiet ultricies. Pretium ut velit integer nibh.',
  },
]

const MonitoringSystems = () => {
  const [yearsChart, setYears] = useState<string[]>([])
  const [countsChart, setCounts] = useState<number[]>([])
  const [percentagesChartMale, setPercentagesMale] = useState<number[]>([])
  const [percentagesChartFemale, setPercentagesFemale] = useState<number[]>([])
  const [maleCount, setMaleCount] = useState<number | null>(null)
  const [femaleCount, setFemaleCount] = useState<number | null>(null)
  const [femaleCountOfYears, setFemaleCountOfYears] = useState<number[]>([])
  const [maleCountOfYears, setMaleCountOfYears] = useState<number[]>([])

  const monitoringStudent = useAppSelector(monitoringSelector.monitoringStudent)

  const methods = useForm()

  useEffect(() => {
    dispatch(monitoringMiddleware.getMonitoringStudent([]))
  }, [])

  useEffect(() => {
    if (monitoringStudent) {
      const yearsArray = monitoringStudent
        .filter(
          (item) =>
            item.educationLevel === 'Vocational education' && item.sexAtBirth === SexAtBirth.Male
        )
        .map((item) => item.year.toString())

      // monitoringStudent.map((item) => item.year)
      const percentagesArrayMale = monitoringStudent
        .filter(
          (item) =>
            item.educationLevel === 'Vocational education' && item.sexAtBirth === SexAtBirth.Male
        )
        .map((item) => item.percentage)

      const percentagesArrayFemale = monitoringStudent
        .filter(
          (item) =>
            item.educationLevel === 'Vocational education' && item.sexAtBirth === SexAtBirth.Female
        )
        .map((item) => item.percentage)

      const countsArray = monitoringStudent.map((item) => item.count)

      const valuesMonitoringStudent = Object.values(monitoringStudent)
      const sumFemale = valuesMonitoringStudent.reduce((total, item) => {
        if (item.sexAtBirth === 'Female') {
          return total + item.count
        }

        return total
      }, 0)

      const sumMale = valuesMonitoringStudent.reduce((total, item) => {
        if (item.sexAtBirth === 'Male') {
          return total + item.count
        }

        return total
      }, 0)

      const maleCountOfYearsArray = monitoringStudent
        .filter(
          (item) =>
            item.educationLevel === 'Higher education' && item.sexAtBirth === SexAtBirth.Male
        )
        .map((item) => item.count)
      const femaleCountOfYearsArray = monitoringStudent
        .filter(
          (item) =>
            item.educationLevel === 'Higher education' && item.sexAtBirth === SexAtBirth.Female
        )
        .map((item) => item.count)

      setYears(yearsArray)
      setPercentagesMale(percentagesArrayMale)
      setPercentagesFemale(percentagesArrayFemale)
      setCounts(countsArray)
      setFemaleCount(sumFemale)
      setMaleCount(sumMale)
      setFemaleCountOfYears(femaleCountOfYearsArray)
      setMaleCountOfYears(maleCountOfYearsArray)
    }
  }, [monitoringStudent])

  return (
    <FormProvider {...methods}>
      <form>
        <Tab.Group>
          <div className="grid grid-cols-1 divide-y divide-gray-thin">
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.label}
                className="pt-10"
              >
                <div className="mb-5 text-lg font-medium">{tab.title}</div>
                <div className="mb-5 font-normal">{tab.content}</div>
                <div className="mb-5 font-normal text-black-light">{tab.content2}</div>
                <div>{tab.content3}</div>
              </Tab.Panel>
            ))}
            <div className="mt-8">
              <ChartComponent
                years={yearsChart}
                percentages={percentagesChartMale}
                percentagesChartFemale={percentagesChartFemale}
                counts={countsChart}
              />
              <PieChart
                male={maleCount}
                female={femaleCount}
              />
              <ColumnChart
                years={yearsChart}
                counts={countsChart}
                female={femaleCountOfYears}
                male={maleCountOfYears}
              />
            </div>
          </div>
          {/* </Tab.Panels> */}
        </Tab.Group>
      </form>
    </FormProvider>
  )
}

export default MonitoringSystems
MonitoringSystems.Layout = 'Profile'
