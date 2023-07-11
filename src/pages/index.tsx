import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { Container } from '@components/Container'
import { EventsCarousel } from '@components/EventsCarousel'
import { ChevronIcon, RightIcon } from '@components/Icons'
import { Introduction } from '@components/Introduction'
import { NewsCarousel } from '@components/NewsCarousel'
import { data1, helps } from '@constants/home'
import { Translation } from '@constants/translations'
import { Disclosure } from '@headlessui/react'
import { dispatch, useAppSelector } from '@redux/hooks'
import { eventsMiddleware } from '@redux/slices/events'
import { newsMiddleware } from '@redux/slices/news'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'
import Link from 'next/link'

import { isAuthenticated } from '@utils/authUtils'

const Home = () => {
  const [t] = useTranslation()
  const { role } = useAppSelector(usersSelector.user)

  useEffect(() => {
    dispatch(eventsMiddleware.clearEventsList())
    dispatch(newsMiddleware.clearNewsList())
  }, [])

  const startNowUrl = () =>
    role === Roles.Admin ? '/profile/monitoring-systems' : '/profile/applications'

  return (
    <>
      <Introduction
        img={
          <Image
            alt="students"
            width={400}
            height={400}
            className="max-h-[400px] max-w-[400px]"
            src="/students.png"
          />
        }
        title={t(Translation.PAGE_HOME_MAIN_TITLE)}
        desc={t(Translation.PAGE_HOME_MAIN_DESCRIPTION)}
        button={
          <Link href={`${!isAuthenticated() ? '/login' : startNowUrl()}`}>
            <Button
              size="lg"
              RightIcon={RightIcon}
            >
              {t(Translation.PAGE_HOME_MAIN_ACTIONS_START_NOW)}
            </Button>
          </Link>
        }
      />
      <Introduction
        className="mb-px"
        color="wave"
        wave
        title={t(Translation.PAGE_HOME_INTRODUCTION_TITLE)}
        desc={t(Translation.PAGE_HOME_INTRODUCTION_DESCRIPTION)}
        button={
          <Link href="/fill-the-form">
            <Button
              size="lg"
              RightIcon={RightIcon}
            >
              {t(Translation.PAGE_HOME_INTRODUCTION_ACTIONS_FILL_THE_FORM)}
            </Button>
          </Link>
        }
      />
      <Container color="secondary">
        <div className="flex flex-col justify-between xl:flex-row">
          {data1.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-start py-10"
            >
              <span className="mr-5 text-2xl text-primary">{item.number}</span>
              <span className="text-lg text-black-light xl:max-w-200 xl:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
      <div className="h-[95px] w-full bg-[url('/wave2.svg')] bg-cover bg-center bg-no-repeat" />
      <Container className="my-30 xl:my-60">
        <h2 className="mb-10 text-xl font-medium xl:mt-25 xl:text-2xl">
          <span className="hidden xl:inline-block">{t(Translation.PAGE_HOME_SECTIONS_TITLE)}</span>
          <span className="xl:hidden">{t(Translation.PAGE_HOME_SECTIONS_MOBILE_TITLE)}</span>
        </h2>
        {helps.map((help) => (
          <Disclosure key={help.id}>
            {({ open }) => (
              <div
                className={`${
                  open ? 'border-outline-active' : 'border-outline'
                } mb-5 rounded last:mb-0 xl:mb-10`}
              >
                <Disclosure.Button className="flex w-full items-center justify-between p-5 xl:px-20 xl:py-10">
                  <div className="flex items-center">
                    <span className="mr-5 w-auto">{help.icon}</span>
                    <span className="text-lg font-medium xl:font-semibold">{help.name}</span>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border text-primary xl:h-16 xl:w-16">
                    <ChevronIcon className={`transform ${open && 'rotate-90'}`} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 pb-10 xl:px-20">
                  <div className="mb-10">
                    <p>{t(Translation.PAGE_HOME_SECTIONS_EDUCATIONAL_INSTITUTES_DESCRIPTION)}</p>
                  </div>
                  <Link href={help.href}>
                    <Button
                      size="lg"
                      RightIcon={RightIcon}
                    >
                      {t(Translation.PAGE_HOME_SECTIONS_ACTIONS_FILL_THE_FORM)}
                    </Button>
                  </Link>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </Container>
      <NewsCarousel />
      <EventsCarousel />
    </>
  )
}

export default Home
