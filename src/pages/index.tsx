import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { EventsCarousel } from '@components/EventsCarousel'
import {
  BuildingBankIcon,
  BuildingBankToolboxIcon,
  ChevronIcon,
  ClipboardTaskListIcon,
  DesktopPulseIcon,
  PeopleCommunityIcon,
  RightIcon,
  ToolboxIcon,
} from '@components/Icons'
import { BusinessDealIcon } from '@components/Icons/BusinessDeal'
import { Introduction } from '@components/Introduction'
import { NewsCarousel } from '@components/NewsCarousel'
import { Translation } from '@constants/translations'
import { Disclosure } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { eventsMiddleware } from '@redux/slices/events'
import { newsMiddleware } from '@redux/slices/news'
import { Button } from '@uiComponents/Button'
import Link from 'next/link'

const data1 = [
  { id: 1, number: '43', text: 'Lorem ipsum dolor sit amet consectetur' },
  { id: 2, number: '200+', text: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 3, number: '95', text: 'Lorem ipsum dolor sit amet consecteturamet.' },
]

const Home = () => {
  const [t] = useTranslation()

  const helps = [
    { id: 1, name: t(Translation.PAGE_HOME_SECTIONS_MASTERS_TITLE), icon: <PeopleCommunityIcon /> },
    {
      id: 2,
      name: t(Translation.PAGE_HOME_SECTIONS_COMPANIES_TITLE),
      icon: <BuildingBankToolboxIcon />,
    },
    {
      id: 3,
      name: t(Translation.PAGE_HOME_SECTIONS_EDUCATIONAL_INSTITUTES_TITLE),
      icon: <BuildingBankIcon />,
    },
    {
      id: 4,
      name: t(Translation.PAGE_HOME_SECTIONS_MONITORING_SYSTEMS_TITLE),
      icon: <DesktopPulseIcon />,
    },
    { id: 5, name: t(Translation.PAGE_HOME_SECTIONS_JOBS_TITLE), icon: <ToolboxIcon /> },
    {
      id: 6,
      name: t(Translation.PAGE_HOME_SECTIONS_PRACTICE_TITLE),
      icon: <ClipboardTaskListIcon />,
    },
  ]

  useEffect(() => {
    dispatch(newsMiddleware.getNewsList(1))
  }, [])

  useEffect(() => {
    dispatch(eventsMiddleware.getEventsList(1))
  }, [])

  return (
    <>
      <Introduction
        img={<BusinessDealIcon />}
        title={t(Translation.PAGE_HOME_MAIN_TITLE)}
        desc={t(Translation.PAGE_HOME_MAIN_DESCRIPTION)}
        button={
          <Link href="/">
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
      <div className="h-[95px] w-full bg-[url('/vawe2.svg')] bg-cover bg-center bg-no-repeat" />

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
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Aenean massa odio in tincidunt. Ac
                      velit fringilla sed libero sed non turpis arcu. Ornare aliquet ullamcorper
                      duis et vitae urna. Vel sit duis congue nibh morbi luctus nibh aliquet
                      egestas. Habitasse nulla ante nunc nulla. Vestibulum condimentum quis
                      adipiscing varius elit vehicula sem. Habitasse nulla ante nunc nulla.
                      Vestibulum condimentum quis adipiscing varius elit vehicula sem.
                    </p>
                  </div>
                  <Link href="/fill-the-form">
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
