'use client'

import { useState } from 'react'
import Image from 'next/image'

import { ApplicationDialog } from '@/components/ApplicationDialog'
import { Button } from '@/components/Button'
import { DeleteDialog } from '@/components/DeleteDialog'

import addSvg from '~/icons/add.svg'
import deleteSvg from '~/icons/delete.svg'

const applications = [
  {
    label: 'Application for work',
    statuses: [
      {
        label: 'Status',
        status: 'Pending',
      },
      {
        label: 'Lorem',
        status: 'Lorem Ipsum',
      },
      {
        label: 'Lore',
        status: '37% dolor',
      },
    ],
  },
  {
    label: 'Application for work',
    statuses: [
      {
        label: 'Status',
        status: 'Pending',
      },
      {
        label: 'Lorem',
        status: 'Lorem Ipsum',
      },
      {
        label: 'Lore',
        status: '37% dolor',
      },
    ],
  },
]

export const Applications = () => {
  const [isOpenApplicationDialog, setIsOpenApplicationDialog] = useState(false)
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false)

  return (
    <>
      {applications.map((item, index) => (
        <div
          key={index}
          className="mb-10 rounded border border-gray-light p-10"
        >
          <h2 className="mb-5 text-lg">{item.label}:</h2>
          <div className="mb-10 flex">
            {item.statuses.map((status) => (
              <p
                key={status.label}
                className="mr-10 text-base text-black-light"
              >
                {status.label}:
                <span className="ml-5 font-medium text-primary">{status.status}</span>
              </p>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-10">
              <Button
                size="bs"
                variant="outlined"
              >
                Deactivate Application
              </Button>
              <Button
                size="bs"
                variant="contained"
              >
                Edit Form
              </Button>
            </div>
            <Button
              variant="text"
              onClick={() => setIsOpenDeleteDialog(true)}
            >
              <Image
                src={deleteSvg}
                alt="delete"
                className="mr-2.5"
              />
              Delete Application
            </Button>
          </div>
        </div>
      ))}
      <Button
        variant="contained"
        color="gray"
        size="hg"
        onClick={() => setIsOpenApplicationDialog(true)}
      >
        <Image
          src={addSvg}
          alt="delete"
          className="mr-2.5"
        />
        Add Application
      </Button>

      <ApplicationDialog
        isOpen={isOpenApplicationDialog}
        setIsOpen={setIsOpenApplicationDialog}
      />

      <DeleteDialog
        isOpen={isOpenDeleteDialog}
        setIsOpen={setIsOpenDeleteDialog}
      />
    </>
  )
}

export default Applications
Applications.Layout = 'Profile'
