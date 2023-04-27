import React from 'react'
import { Button } from '@uiComponents/Button'

export const Review = () => (
  <div className="flex flex-col items-center justify-center">
    <div className="flex w-full flex-col justify-between rounded-md border-2 border-gray-thin xl:flex-row xl:py-10">
      <div className="flex flex-col p-5 xl:px-10 xl:px-5 xl:pb-0 xl:pb-5">
        <div className="mb-5 flex w-full xl:border-b-2 xl:border-gray-thin xl:pb-2.5">
          <h2 className="text-base font-medium xl:text-lg xl:leading-9">Address Details:</h2>
        </div>
        <div className="border-b-2 border-gray-thin pb-5 xl:border-0 xl:pb-0">
          <div className="mb-5 space-y-3 xl:mb-10">
            <div className="flex flex-row flex-wrap">
              <p className="text-base text-black-light">Country:</p>
              <p className="ml-2.5 text-base">Armenia</p>
            </div>
            <div className="flex flex-row flex-wrap">
              <p className="text-base text-black-light">Province:</p>
              <p className="ml-2.5 text-base">Armenia</p>
            </div>
            <div className="flex flex-row flex-wrap">
              <p className="text-base text-black-light">City:</p>
              <p className="ml-2.5 text-base">Abovyan</p>
            </div>
            <div className="flex flex-row flex-wrap">
              <p className="text-base text-black-light">ZIP Code:</p>
              <p className="ml-2.5 text-base">08453</p>
            </div>
            <div className="flex flex-row flex-wrap">
              <p className="text-base text-black-light">Street address:</p>
              <p className="ml-2.5 text-base">Saryan st. 123</p>
            </div>
          </div>
          <Button
            variant="outlined"
            size="fl"
            className="text-primary"
          >
            Change
          </Button>
        </div>
      </div>

      <div className="flex flex-col p-5 xl:border-x-2 xl:border-gray-thin xl:px-10 xl:px-5 xl:pb-0 xl:pb-5">
        <div className="mb-5 flex w-full xl:border-b-2 xl:border-gray-thin xl:pb-2.5">
          <h2 className="text-base font-medium xl:text-lg">Contacts Details:</h2>
        </div>
        <div className="border-b-2 border-gray-thin pb-5 xl:border-0 xl:pb-0">
          <div className="xl:[w-220px] mb-10 space-y-3">
            <div className="flex flex-col">
              <p className="text-base text-black-light">Name of the current owner:</p>
              <p className="text-base">Lorem Ipsum</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-black-light">Company’s email:</p>
              <p className="text-base">example@gmail.com</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base text-black-light">Company’s telephone:</p>
              <p className="text-base xl:ml-2.5">+374 98 465 509</p>
            </div>
          </div>
          <Button
            size="fl"
            variant="outlined"
            className="text-primary"
          >
            Change
          </Button>
        </div>
      </div>

      <div className="flex flex-col p-5 xl:px-10 xl:px-5 xl:pb-0 xl:pb-5">
        <div className="mb-5 flex w-full xl:border-b-2 xl:border-gray-thin xl:pb-2.5">
          <h2 className="text-base font-medium xl:text-lg">Education Details:</h2>
        </div>
        <div className="mb-10 space-y-3">
          <div className="flex flex-row flex-wrap">
            <p className="text-base text-black-light">Employees:</p>
            <p className="ml-2.5 text-base">2</p>
          </div>
          <div className="flex flex-row flex-wrap">
            <p className="text-base text-black-light">Schedule:</p>
            <p className="ml-2.5 text-base">9:00 - 18:00</p>
          </div>
          <div className="flex flex-row flex-wrap">
            <p className="text-base text-black-light">Salary:</p>
            <p className="ml-2.5 text-base">980$</p>
          </div>
          <div className="flex flex-row flex-wrap">
            <p className="text-base text-black-light">Education:</p>
            <p className="ml-2.5 text-base">Masters Degree</p>
          </div>
          <div className="flex flex-row flex-wrap">
            <p className="text-base text-black-light">Experience:</p>
            <p className="ml-2.5 text-base">1-5 years</p>
          </div>
        </div>
        <Button
          variant="outlined"
          className="text-primary"
        >
          Change
        </Button>
      </div>
    </div>
    <div className="mt-10 flex w-full w-full max-w-[320px] justify-center">
      <Button size="fl">Submit</Button>
    </div>
  </div>
)
