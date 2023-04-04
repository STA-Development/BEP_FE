import React from 'react'
import { useRouter } from 'next/router'

export const Breadcrumbs = () => {
  const location = useRouter()

  const pageTitle = location.asPath.charAt(1).toUpperCase() + location.asPath.slice(2)

  return (
    <ul className="hidden text-base text-black-light xl:flex">
      <li className="after:mx-2.5 after:content-['\/']">Home</li>
      <li>{pageTitle}</li>
    </ul>
  )
}
