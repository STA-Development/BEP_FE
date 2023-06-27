import React, { useMemo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ChartComponent, ColumnChart, PieChart } from '@components/Charts'
import {
  EducationLevel,
  Gender,
  IMonitoringSystemFilterValues,
  IParamsProps,
  monitoringSystemFilterDefaultValues,
  Years,
} from '@components/Educationalnstitutes/helper'
import { Translation } from '@constants/translations'
import { Tab } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { monitoringMiddleware } from '@redux/slices/monitoring-systems'
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

const MonitoringSystems = () => {
  const [t] = useTranslation()

  const years = useMemo(
    () => Years.map((item, index) => ({ name: item, id: index.toString() })),
    []
  )

  const educationLevel = useMemo(
    () => EducationLevel.map((item, index) => ({ name: item, id: index.toString() })),
    []
  )

  const sexAtBirth = useMemo(
    () => Gender.map((item, index) => ({ name: item, id: index.toString() })),
    []
  )

  const methods = useForm<IMonitoringSystemFilterValues>({
    defaultValues: monitoringSystemFilterDefaultValues,
    mode: 'onSubmit',
  })

  const { handleSubmit } = methods

  const onSubmit = (data: IMonitoringSystemFilterValues) => {
    const filters = Object.keys(data)
      .map((key) => ({
        key,
        values: data[key as keyof IMonitoringSystemFilterValues].name && [
          data[key as keyof IMonitoringSystemFilterValues].name,
        ],
      }))
      .filter((item) => !!item.values)

    dispatch(monitoringMiddleware.getMonitoringEnums(filters as IParamsProps[]))
  }

  return (
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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-10 inline-block xl:flex xl:w-full xl:flex-row">
                <div className="flex flex-col gap-2 xl:flex-row xl:gap-5">
                  <div className="w-full xl:w-[220px]">
                    <AutocompleteField
                      fieldName="year"
                      items={years}
                      placeholder={
                        t(Translation.PAGE_PROFILE_MENU_MONITORING_SYSTEMS_FILTERS_YEARS) as string
                      }
                    />
                  </div>
                  <div className="w-full xl:w-[220px]">
                    <AutocompleteField
                      fieldName="sexAtBirth"
                      items={sexAtBirth}
                      placeholder="gender"
                    />
                  </div>
                  <div className="w-full xl:w-[220px]">
                    <AutocompleteField
                      fieldName="educationLevel"
                      items={educationLevel}
                      placeholder="Education Level"
                    />
                  </div>
                  <Button
                    size="md"
                    type="submit"
                  >
                    {t(Translation.PAGE_PROFILE_MENU_MONITORING_SYSTEMS_ACTIONS_APPLY_FILTERS)}
                  </Button>
                </div>
              </div>
            </form>
          </FormProvider>

          <div>
            <ChartComponent />
            <PieChart />
            <ColumnChart />
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
  )
}

export default MonitoringSystems
MonitoringSystems.Layout = 'Profile'
