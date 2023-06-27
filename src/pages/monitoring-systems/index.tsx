import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ChartComponent, ColumnChart, PieChart } from '@components/Charts'
import { Translation } from '@constants/translations'
import { Tab } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { monitoringMiddleware, monitoringSelector } from '@redux/slices/monitoring-systems'
import { Button } from '@uiComponents/Button'
import AutocompleteField from '@uiComponents/FormFields/Autocomplete'

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

interface Years {
  id: string
  name: string
}

const years: Years[] = [
  { id: '1', name: '2019' },
  { id: '2', name: '2020' },
  { id: '3', name: '2021' },
]

const MonitoringSystems = () => {
  const [t] = useTranslation()
  const [yearsChart, setYears] = useState<number[]>([])
  const [countsChart, setCounts] = useState<number[]>([])
  const [percentagesChart, setPercentages] = useState<number[]>([])
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
      const yearsArray = monitoringStudent.map((item) => item.year)
      const percentagesArray = monitoringStudent.map((item) => item.percentage)
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
        .filter((item) => item.sexAtBirth === 'Male')
        .map((item) => item.count)
      const femaleCountOfYearsArray = monitoringStudent
        .filter((item) => item.sexAtBirth === 'Female')
        .map((item) => item.count)

      setYears(yearsArray)
      setPercentages(percentagesArray)
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
          <Tab.List>
            {tabs.map((tab) => (
              <Tab
                key={tab.label}
                className="mr-10 text-base text-black focus:outline-none"
              >
                {({ selected }) => (
                  <>
                    <div className="p-2.5 pb-1.5">{tab.label}</div>
                    <div
                      className={`h-1 w-full rounded ${selected ? 'bg-primary' : 'bg-transparent'}`}
                    />
                  </>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <div className="grid grid-cols-1 divide-y divide-gray-thin">
              <div className="my-10 inline-block xl:flex xl:w-full xl:flex-row">
                <div className="flex flex-col gap-2 xl:flex-row xl:gap-5">
                  <div className="w-full xl:w-[124px]">
                    <AutocompleteField
                      fieldName="years"
                      items={years}
                      placeholder={
                        t(Translation.PAGE_PROFILE_MENU_MONITORING_SYSTEMS_FILTERS_YEARS) as string
                      }
                    />
                  </div>
                  <div className="w-full xl:w-[124px]">
                    <AutocompleteField
                      fieldName="years"
                      items={years}
                      placeholder={
                        t(Translation.PAGE_PROFILE_MENU_MONITORING_SYSTEMS_FILTERS_REGION) as string
                      }
                    />
                  </div>
                  <div className="w-full xl:w-[124px]">
                    <AutocompleteField
                      fieldName="years"
                      items={years}
                      placeholder={
                        t(Translation.PAGE_PROFILE_MENU_MONITORING_SYSTEMS_FILTERS_REGION) as string
                      }
                    />
                  </div>
                  <Button size="md">
                    {t(Translation.PAGE_PROFILE_MENU_MONITORING_SYSTEMS_ACTIONS_APPLY_FILTERS)}
                  </Button>
                </div>
              </div>
              <div>
                <ChartComponent
                  years={yearsChart}
                  percentages={percentagesChart}
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
            </div>
          </Tab.Panels>
        </Tab.Group>
      </form>
    </FormProvider>
  )
}

export default MonitoringSystems
MonitoringSystems.Layout = 'Profile'
