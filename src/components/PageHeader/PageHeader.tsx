import React from 'react'
import { useTranslation } from 'react-i18next'
import { Breadcrumbs } from '@components/Breadcrumbs'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import { useRouter } from 'next/router'

export interface IPageHeaderProps {
  paths?: string[]
  title: string
  description?: string
}

export const PageHeader = ({ title, description, paths = [] }: IPageHeaderProps) => {
  const [t] = useTranslation()
  const router = useRouter()

  return (
    <div className="flex w-full items-start justify-between border-b border-gray-thin py-5 xl:py-10">
      <div className="flex w-full flex-wrap content-between items-end justify-between">
        <div className="mr-10">
          <h1 className="text-xl font-medium xl:font-normal">{title}</h1>
          {description ? (
            <p className="mt-2.5 text-base text-black-light xl:mt-5 xl:text-lg">{description}</p>
          ) : null}
        </div>
        <div className="mt-5 flex content-end">
          {paths?.length ? <Breadcrumbs paths={paths} /> : null}
          {router.pathname === '/events' && (
            <Button
              className="mt-2.5 xl:mt-5"
              size="fl"
              variant="outlined"
            >
              {t(Translation.PAGE_EVENTS_MAIN_CREATE_BUTTON)}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
