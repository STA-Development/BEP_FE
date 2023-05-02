import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IJobSeekerProps } from '@allTypes/reduxTypes/areaSpecializationTypes'
import { AreaOfSpecialization } from '@components/AreaOfSpecialization'
import { Container } from '@components/Container'
import { FilTheFormJobReview } from '@components/FilTheFormJobReview'
import { LeftIcon } from '@components/Icons/LeftIcon'
import { Translation } from '@constants/translations'
import { Tab } from '@headlessui/react'
import { Button } from '@uiComponents/Button'

const FillTheForm = () => {
  const [t] = useTranslation()

  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [jobSeekerReview, setJobSeekerReview] = useState<null | IJobSeekerProps>(null)

  return (
    <Container className="mb-30 mt-15 pb-20">
      <div className="mb-10 flex justify-between">
        <Button
          variant="text"
          LeftIcon={LeftIcon}
          onClick={() => {
            setSelectedIndex((prev) => prev - 1)
          }}
        >
          {t(Translation.PAGE_FILL_THE_FORM_ACTIONS_GO_BACK)}
        </Button>
      </div>
      <div className="mx-auto flex w-full max-w-[380px] flex-col items-center">
        <Tab.Group
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className="hidden">
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="mb-5 flex justify-between text-xl">
                <p>{t(Translation.PAGE_FILL_THE_FORM_JOB_ONE_TITLE)}</p>
                <p className="text-primary">1/2</p>
              </div>
              <div>
                <AreaOfSpecialization
                  setSelectedIndex={setSelectedIndex}
                  setJobSeekerReview={setJobSeekerReview}
                  jobSeekerReview={jobSeekerReview}
                />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mb-5 flex justify-between text-xl">
                <p>{t(Translation.PAGE_FILL_THE_FORM_JOB_ONE_TITLE)}</p>
                <p className="text-primary">2/2</p>
              </div>
              <div>
                <FilTheFormJobReview
                  jobSeekerReview={jobSeekerReview}
                  setSelectedIndex={setSelectedIndex}
                />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Container>
  )
}

export default FillTheForm
