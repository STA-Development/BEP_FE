import React from 'react'
import { Container } from '@components/Container'
import { ClipBoard } from '@components/Icons/ClipBoard'
import { Employer } from '@components/Icons/Employer'
import { Internee } from '@components/Icons/Internee'
import { SuitCase } from '@components/Icons/SuitCase'
import { Button } from '@uiComponents/Button'

const afterRegistrationPopUp = () => (
  <div className="flex w-full justify-center">
    <Container className="w-3/4 rounded-md py-24 ">
      <div className="flex flex-col border-2">
        <div className="flex w-full flex-wrap border-2 pb-8 xl:justify-center">
          <div className="bg-gray-transparent mx-4 my-4 flex w-11/12 flex-col items-center justify-center rounded-md text-primary xl:w-[460px]">
            <p>Please select your role:</p>
          </div>
          <div className="mx-4 my-4 flex w-11/12 flex-col items-end justify-center rounded-md bg-transparent text-primary xl:w-[460px]" />

          <div className="flex w-full flex-row flex-wrap justify-center">
            <div className="mx-4 my-4 flex h-60 w-11/12 flex-col items-center justify-center rounded-md border-2 bg-gray-thin text-primary hover:border-[#326789] xl:w-[460px] ">
              <div className="flex h-[55px] w-[55px] items-center justify-center ">
                <SuitCase className="h-full w-full" />
              </div>
              <p className="py-2">Employee</p>
            </div>
            <div className="mx-4 my-4 flex h-60 w-11/12 flex-col items-center justify-center rounded-md border-2 bg-gray-thin text-primary hover:border-[#326789] xl:w-[460px]">
              <div className="flex h-[55px] w-[55px] items-center justify-center">
                <ClipBoard className="h-full w-full" />
              </div>
              <p className="py-2">Internee</p>
            </div>
            <div className="mx-4 my-4 flex h-60 w-11/12 flex-col items-center justify-center rounded-md border-2 bg-gray-thin text-primary hover:border-[#326789] xl:w-[460px]">
              <div className="flex h-[55px] w-[55px] items-center justify-center">
                <Employer className="h-full w-full" />
              </div>
              <p className="py-2">Employer</p>
            </div>
            <div className="mx-4 my-4 flex h-60 w-11/12 flex-col items-center justify-center rounded-md border-2 bg-gray-thin text-primary hover:border-[#326789] xl:w-[460px]">
              <div className="flex h-[55px] w-[55px] items-center justify-center">
                <Internee className="h-full w-full" />
              </div>
              <p className="py-2">Internee</p>
            </div>
          </div>
          <div className="bg-gray-transparent mx-4 my-4 flex w-11/12 flex-col items-center justify-center rounded-md text-primary xl:w-[460px]" />
          <div className="mx-4 my-4 flex w-11/12 flex-col items-end justify-center rounded-md bg-transparent text-primary xl:w-[460px]">
            <Button
              size="bs"
              className="w-1/2"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

export default afterRegistrationPopUp
