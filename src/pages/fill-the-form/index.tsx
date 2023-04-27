import React, { useState } from 'react'
import { Container } from '@components/Container'
import { AddresDetails, ContactInformation, Review, Study } from '@components/FillTheFormSteps'
import { LeftIcon } from '@components/Icons/LeftIcon'
import { Tab } from '@headlessui/react'
import { Button } from '@uiComponents/Button'

const FillTheForm = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const nextTab = () => {
    setSelectedIndex((prev) => (prev > 2 ? 1 : prev) + 1)
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
      <div className="mx-auto flex flex-col items-center">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="hidden">
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
            <Tab>Tab 4</Tab>
          </Tab.List>
          <Tab.Panels>
            <form>
              <Tab.Panel>
                <div className="w-full max-w-[380px]">
                  <div className="mb-5 flex justify-between text-xl">
                    <p>Where do you study/studied?</p>
                    <p className="text-primary">1/4</p>
                  </div>
                  <Study nextTab={nextTab} />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="mb-10 w-full max-w-[380px]">
                  <div className="mb-10 flex justify-between text-xl">
                    <p>Fill your address details</p>
                    <p className="text-primary">2/4</p>
                  </div>
                  <ContactInformation nextTab={nextTab} />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="w-full max-w-[380px]">
                  <div className="mb-5 flex justify-between text-xl">
                    <p>Fill your address details</p>
                    <p className="text-primary">3/4</p>
                  </div>
                  <AddresDetails nextTab={nextTab} />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="w-full">
                  <div className="mb-5 flex justify-center text-xl">
                    <p>Let’s Review and Submit</p>
                    <p className="text-primary xl:ml-5">4/4</p>
                  </div>
                  <Review />
                </div>
              </Tab.Panel>
            </form>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Container>
  )
}

export default FillTheForm
