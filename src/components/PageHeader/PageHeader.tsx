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
  <div className="my-5 flex w-full items-start justify-between xl:my-10">
    <div>
      <h1 className="text-xl font-medium xl:font-normal">{title}</h1>
      {description ? (
        <p className="mt-2.5 text-base text-black-light xl:mt-5 xl:text-lg">{description}</p>
      ) : null}
    </div>
    {breadcrumbs ? <Breadcrumbs /> : null}
  </div>
)
