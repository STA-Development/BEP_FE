import React from 'react'
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

const MonitoringSystems = () => (
  <div className="container">
    <PageHeader
      title="Monitoring Systems"
      paths={['Home, Masters']}
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
        {tabs.map((tab) => (
          <Tab.Panel
            key={tab.label}
            className="pt-10 pb-28"
          >
            {tab.content}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  </div>
)

export default MonitoringSystems
