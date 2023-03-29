import React from 'react'

export const Breadcrumbs = ({ paths }: { paths: string[] }) => (
  <ul className="flex text-sm text-black-light">
    {paths.map((path, index) => (
      <li className={index !== paths.length - 1 ? "after:mx-2.5 after:content-['/']" : ''}>
        {path}
      </li>
    ))}
  </ul>
)
