import React from 'react'
import { IPageHeaderParams } from '@allTypes/IPaths'
import { Breadcrumbs } from '@components/Breadcrumbs'

export const PageHeader = ({ title, paths }: IPageHeaderParams) => (
  <div className="mt-10 mb-7.5 flex items-center justify-between">
    <h1 className="text-xl">{title}</h1>
    {paths?.length !== 0 ? <Breadcrumbs paths={paths} /> : null}
  </div>
)
