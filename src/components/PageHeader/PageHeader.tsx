import React from 'react'
import { Breadcrumbs } from '@components/Breadcrumbs'

export const PageHeader = ({ title, paths }: { title: string; paths: string[] }) => (
  <div className="mt-10 mb-7.5 flex items-center justify-between">
    <h1 className="text-xl">{title}</h1>
    {paths.length !== 0 ? <Breadcrumbs paths={paths} /> : null}
  </div>
)
