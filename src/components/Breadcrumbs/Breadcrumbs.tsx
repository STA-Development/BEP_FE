import React from 'react'

export interface IBreadCrumbsProps {
  paths?: string[]
}

export const Breadcrumbs = ({ paths }: IBreadCrumbsProps) => (
  <ul className="flex text-sm text-black-light">
    {paths?.map((path: string, index: number) => (
      <li className={index !== paths.length - 1 ? "after:mx-2.5 after:content-['/']" : ''}>
        {path}
      </li>
    ))}
  </ul>
)
