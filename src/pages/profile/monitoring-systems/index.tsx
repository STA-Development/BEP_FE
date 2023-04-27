import React from 'react'
import { Tab } from '@headlessui/react'
import { Autocomplete } from '@uiComponents/Autocomplete'
import { Button } from '@uiComponents/Button'

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

const MonitoringSystems = () => (
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
              <div className={`h-1 w-full rounded ${selected ? 'bg-primary' : 'bg-transparent'}`} />
            </>
          )}
        </Tab>
      ))}
    </Tab.List>
    <Tab.Panels>
      <div className="grid grid-cols-1 divide-y divide-gray-thin">
        <div className="my-10 inline-block xl:flex xl:w-full xl:flex-row">
          <div className="flex flex-row gap-5">
            <div className="w-[124px]">
              <Autocomplete
                items={years}
                placeholder="Years"
              />
            </div>
            <div className="w-[124px]">
              <Autocomplete
                items={years}
                placeholder="Region"
              />
            </div>
            <div className="w-[124px]">
              <Autocomplete
                items={years}
                placeholder="Region"
              />
            </div>
            <Button size="md">Apply filters</Button>
          </div>
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

export default MonitoringSystems
MonitoringSystems.Layout = 'Profile'
