import React from 'react'
import { Breadcrumbs } from '@components/Breadcrumbs'

export const PageHeader = ({
  title,
  breadcrumbs = false,
}: {
  title: string
  breadcrumbs?: boolean
}) => (
  <div className="mt-10 mb-7.5 flex items-center justify-between">
    <h1 className="text-xl">{title}</h1>
    {breadcrumbs ? <Breadcrumbs /> : null}
  </div>
)
