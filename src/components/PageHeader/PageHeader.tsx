import React from 'react'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { Breadcrumbs } from '@components/Breadcrumbs'
import { useAppSelector } from '@redux/hooks'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { useRouter } from 'next/router'

export interface IPageHeaderProps {
  paths?: string[]
  title: string
  description?: string
  route?: string
  buttonTitle?: string
}

export const PageHeader = ({
  title,
  description,
  route,
  paths = [],
  buttonTitle,
}: IPageHeaderProps) => {
  const { role } = useAppSelector(usersSelector.user)

  const router = useRouter()

  return (
    <div className="flex w-full items-start justify-between border-b border-gray-thin py-5 xl:py-10">
      <div className="w-full">
        <h1 className="text-xl font-medium xl:font-normal">{title}</h1>
        {description ? (
          <div>
            {role === Roles.Admin && route ? (
              <div className="flex w-full justify-between">
                <p className="mt-2.5 text-base text-black-light xl:mt-5 xl:text-lg">
                  {description}
                </p>
                <Button
                  variant="outlined"
                  onClick={() => router.push(`${route}`)}
                >
                  {buttonTitle}
                </Button>
              </div>
            ) : (
              <p className="mt-2.5 text-base text-black-light xl:mt-5 xl:text-lg">{description}</p>
            )}
          </div>
        ) : null}
      </div>
      {paths?.length ? <Breadcrumbs paths={paths} /> : null}
    </div>
  )
}
