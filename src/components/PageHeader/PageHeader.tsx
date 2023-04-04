import React from 'react'
import { IPageHeaderProps } from '@allTypes/pageHeader'
import { Breadcrumbs } from '@components/Breadcrumbs'

export const PageHeader = ({ title, description, paths = [] }: IPageHeaderProps) => (
  <div className="my-5 flex w-full items-start justify-between xl:my-10">
    <div>
      <h1 className="text-xl font-medium xl:font-normal">{title}</h1>
      {description ? (
        <p className="mt-2.5 text-base text-black-light xl:mt-5 xl:text-lg">{description}</p>
      ) : null}
    </div>
    {paths?.length ? <Breadcrumbs paths={paths} /> : null}
  </div>
)
