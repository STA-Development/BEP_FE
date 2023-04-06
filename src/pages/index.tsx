import React from 'react'
import { Container } from '@components/Container'
import {
  AgreementIcon,
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
import { Disclosure } from '@headlessui/react'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@UIComponents/Button'
import Link from 'next/link'

const data1 = [
  { id: 1, number: '43', text: 'Lorem ipsum dolor sit amet consectetur' },
  { id: 2, number: '200+', text: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 3, number: '95', text: 'Lorem ipsum dolor sit amet consecteturamet.' },
]

const helps = [
  { id: 1, name: 'Masters', icon: <PeopleCommunityIcon /> },
  { id: 2, name: 'Companies', icon: <BuildingBankToolboxIcon /> },
  { id: 3, name: 'Educational Institutes', icon: <BuildingBankIcon /> },
  { id: 4, name: 'Monitoring Systems', icon: <DesktopPulseIcon /> },
  { id: 5, name: 'Jobs', icon: <ToolboxIcon /> },
  { id: 6, name: 'Practice', icon: <ClipboardTaskListIcon /> },
]

const Home = () => {
  // TODO: remove this after first API implementation
  const clickFunc = () => {
    dispatch(viewsMiddleware.getExampleValue({ dataFromFE: helps[0].name }))
  }

  return (
    <>
      <Introduction
        img={<BusinessDealIcon />}
        title="Business and Education Partnership Foundation"
        desc="Lorem ipsum dolor sit amet consectetur. Massa sed."
        button={
          <Link href="/">
            <Button
              size="lg"
              RightIcon={RightIcon}
              onClick={clickFunc}
            >
              Start now
            </Button>
          </Link>
        }
      />
      <Introduction
        className="mb-px"
        color="secondary"
        img={<AgreementIcon />}
        title="What is BEP?"
        desc="“Business and Education Partnership” Foundation has been implementing the activities aimed
          at supporting the sustainable development and enhancement of the Armenian education system
          through introduction of innovative education models and mechanisms based on advanced
          international experience, as well as providing an assistance to the result-oriented
          process of vocational training."
        button={
          <Link href="/fill-the-form">
            <Button
              size="lg"
              RightIcon={RightIcon}
            >
              Fill the form
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

      <Container className="my-30 xl:my-60">
        <h2 className="mb-10 text-xl font-medium xl:mt-25 xl:text-2xl">
          <span className="hidden xl:inline-block">What are you looking for?</span>
          <span className="xl:hidden">How can we help?</span>
        </h2>

        {helps.map((help) => (
          <Disclosure key={help.id}>
            {({ open }) => (
              <div className="mb-5 last:mb-0 xl:mb-10">
                <Disclosure.Button
                  className={`border-outline flex w-full items-center justify-between rounded-lg p-5
                    xl:py-10 xl:px-20 ${open && 'rounded-b-none outline-2 outline-primary'}`}
                >
                  <div className="flex items-center">
                    <span className="mr-5 w-auto">{help.icon}</span>
                    <span className="text-lg font-medium xl:font-semibold">{help.name}</span>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border text-primary xl:h-16 xl:w-16">
                    <ChevronIcon className={`transform ${open && 'rotate-90'}`} />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel
                  className="relative -m-0.5 rounded-b-lg border border-2 border-t-0 border-primary bg-white
                    px-6 pb-10 outline-gray-thin xl:px-20"
                >
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
                      Fill the form
                    </Button>
                  </Link>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </Container>

      <NewsCarousel />
    </>
  )
}

export default Home
