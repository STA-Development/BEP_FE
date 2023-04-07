import React, { useState } from 'react'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons/LeftIcon'
import { Tab } from '@headlessui/react'
import { Autocomplete } from '@uiComponents/Autocomplete'
import { Button } from '@uiComponents/Button'

interface Person {
  id: string
  name: string
}

const people: Person[] = [
  { id: '1', name: 'Durward Reynolds' },
  { id: '2', name: 'Kenton Towne' },
  { id: '3', name: 'Therese Wunsch' },
  { id: '4', name: 'Benedict Kessler' },
  { id: '5', name: 'Katelyn Rohan' },
]

const FillTheForm = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const nextTab = () => {
    setSelectedIndex((prev) => (prev > 1 ? 1 : prev) + 1)
  }

  return (
    <Container className="mb-30 mt-15">
      <div className="mb-10 flex justify-between">
        <Button
          variant="text"
          LeftIcon={LeftIcon}
          onClick={() => {
            setSelectedIndex((prev) => prev - 1)
          }}
        >
          Go back
        </Button>
      </div>
      <div className="mx-auto flex w-[380px] flex-col items-center">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="hidden">
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="mb-5 flex justify-between text-xl">
                <p>Where do you study/studied?</p>
                <p className="text-primary">1/3</p>
              </div>

              <div className="mb-5 w-full">
                <Autocomplete
                  items={people}
                  placeholder="University / College"
                />
              </div>
              <div className="mb-5 w-full">
                <Autocomplete
                  items={people}
                  placeholder="Degree"
                />
              </div>
              <div className="mb-5 w-full">
                <Autocomplete
                  items={people}
                  placeholder="Faculty"
                />
              </div>
              <div className="mb-5 w-full">
                <input
                  type="text"
                  placeholder="Student Code *"
                  className="w-full rounded border border-gray-thin px-5 py-2.5 outline-0 placeholder:text-base placeholder:text-black"
                />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mb-5 flex justify-between text-xl">
                <p>Fill your address details</p>
                <p className="text-primary">2/3</p>
              </div>

              <div className="mb-5 w-full">
                <Autocomplete
                  items={people}
                  placeholder="Armenia"
                />
              </div>
              <div className="mb-5 w-full">
                <input
                  type="text"
                  placeholder="Province"
                  className="w-full rounded border border-gray-thin px-5 py-2.5 text-base outline-0 placeholder:text-base placeholder:text-black"
                />
              </div>
              <div className="mb-5 flex w-full justify-between gap-5">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full rounded border border-gray-thin px-5 py-2.5 text-base outline-0 placeholder:text-base placeholder:text-black"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full rounded border border-gray-thin px-5 py-2.5 text-base outline-0 placeholder:text-base placeholder:text-black"
                />
              </div>
              <div className="mb-5 w-full">
                <input
                  type="text"
                  placeholder="Street, apt./building number *"
                  className="w-full rounded border border-gray-thin px-5 py-2.5 text-base outline-0 placeholder:text-base placeholder:text-black"
                />
              </div>
            </Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        <Button
          size="fl"
          onClick={nextTab}
        >
          Next
        </Button>
      </div>
    </Container>
  )
}

export default FillTheForm
