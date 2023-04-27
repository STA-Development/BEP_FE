import React from 'react'

interface IBreadCrumbsProps {
  paths?: string[]
}

export const Breadcrumbs = ({ paths }: IBreadCrumbsProps) => (
  <ul className="hidden text-base text-black-light xl:flex">
    {paths?.map((path: string, index: number) => (
      <li
        key={path}
        className={index !== paths.length - 1 ? "after:mx-2.5 after:content-['/']" : ''}
      >
        {path}
      </li>
    ))}
  </ul>
)
