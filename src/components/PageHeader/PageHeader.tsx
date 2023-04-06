import React from 'react'
import { Breadcrumbs } from '@components/Breadcrumbs'

export interface IPageHeaderProps {
  paths?: string[]
  title: string
  description?: string
}

export const PageHeader = ({ title, description, paths = [] }: IPageHeaderProps) => (
  <div className="flex w-full items-start justify-between border-b border-gray-thin py-5 xl:py-10">
    <div>
      <h1 className="text-xl font-medium xl:font-normal">{title}</h1>
      {description ? (
        <p className="mt-2.5 text-base text-black-light xl:mt-5 xl:text-lg">{description}</p>
      ) : null}
    </div>
    {paths?.length ? <Breadcrumbs paths={paths} /> : null}
  </div>
)
