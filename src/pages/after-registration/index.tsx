import React from 'react'
import { Container } from '@components/Container'
import { JobIcon } from '@components/Icons'
import { Button } from '@uiComponents/Button'

const AfterRegistration = () => (
  <Container className="mt-32 pb-30">
    <div className="flex flex-col items-center">
      <div className="border-black-thin flex flex-col rounded border-2 p-2.5 xl:p-5">
        <h3 className="mb-5 text-lg">Please select your role:</h3>
        <div className="flex w-full flex-col space-y-3 xl:flex-row xl:justify-between xl:space-x-4 xl:space-y-0">
          <Button
            variant="contained"
            color="gray"
            size="role"
            className="flex-col hover:bg-white"
          >
            <div className="mb-5 w-auto">
              <JobIcon />
            </div>
            Job
          </Button>
          <Button
            variant="contained"
            color="gray"
            size="role"
            className="flex-col hover:bg-white"
          >
            <div className="mb-5 w-auto">
              <JobIcon />
            </div>
            Practice
          </Button>
        </div>
      </div>
      <div className="mt-10 flex w-full xl:w-1/4">
        <Button size="fl">Next</Button>
      </div>
    </div>
  </Container>
)

export default AfterRegistration
