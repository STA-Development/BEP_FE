import React from 'react'
import { Autocomplete } from '@components/Autocomplete'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { Divider } from '@components/OrDivider/Divider'
import { PageHeader } from '@components/PageHeader'
import { Tab } from '@headlessui/react'

const tabs = [
  {
    label: 'Tab 1',
    content: 'Content 1',
  },
  {
    label: 'Tab 2',
    content: 'Content 2',
  },
  {
    label: 'Tab 3',
    content: 'Content 3',
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
  <Container>
    <PageHeader
      title="Monitoring Systems"
      breadcrumbs
    />
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
                <div className={`h-1 w-full rounded ${selected ? 'bg-primary' : 'bg-white'}`} />
              </>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        <div className="mt-10  flex w-full flex-row">
          <div className="mb-5 mr-5 w-[124px]">
            <Autocomplete
              items={years}
              placeholder="Years"
            />
          </div>
          <div className="mb-5 mr-5 w-[124px]">
            <Autocomplete
              items={years}
              placeholder="Region"
            />
          </div>
          <div className="mb-5 w-[124px]">
            <Autocomplete
              items={years}
              placeholder="Region"
            />
          </div>
        </div>
        <Divider />
        {tabs.map((tab) => (
          <Tab.Panel
            key={tab.label}
            className="pt-10 pb-20"
          >
            {tab.content}
          </Tab.Panel>
        ))}
        <Button
          variant="outlined"
          size="sm"
          className="mb-20"
        >
          Download Graph and Data
        </Button>
      </Tab.Panels>
    </Tab.Group>
  </Container>
)

export default MonitoringSystems
