import React from 'react'
import { Breadcrumbs } from '@components/Breadcrumbs'

export const PageHeader = ({
  title,
  description,
  breadcrumbs = false,
}: {
  title: string
  description?: string
  breadcrumbs?: boolean
}) => (
  <div className="mb-7.5 mt-10 flex w-full items-start justify-between">
    <div>
      <h1 className="text-xl">{title}</h1>
      <p className="mt-2.5 text-base text-black-light xl:mt-5 xl:text-lg">{description}</p>
    </div>
    {breadcrumbs ? <Breadcrumbs /> : null}
  </div>
)
