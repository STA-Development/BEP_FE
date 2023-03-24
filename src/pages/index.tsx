import { Disclosure } from '@headlessui/react'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Content } from '@/components/Content'
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
} from '@/components/Icons'

import { NextPageWithLayout } from '@/pages/_app'

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

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className="container">
        <Content
          img={<AgreementIcon />}
          title="Business and Education Partnership Foundation"
          desc="Lorem ipsum dolor sit amet consectetur. Massa sed."
          button={
            <Link href="/">
              <Button
                size="lg"
                rightIcon={<RightIcon />}
              >
                Start now
              </Button>
            </Link>
          }
        />
      </div>

      <div className="mb-0 bg-[#3267891a] xl:mb-25">
        <div className="container">
          <div className="flex flex-col justify-between xl:flex-row">
            {data1.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center py-10"
              >
                <span className="mr-5 text-2xl text-primary">{item.number}</span>
                <span className="text-lg text-black-light xl:max-w-200 xl:text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <Content
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
                rightIcon={<RightIcon />}
              >
                Fill the form
              </Button>
            </Link>
          }
        />

        <h2 className="mt-10 mb-10 text-[32px] font-medium xl:mt-25 xl:text-2xl">
          <span className="hidden xl:inline-block">What are you looking for?</span>
          <span className="xl:hidden">How can we help?</span>
        </h2>

        <div>
          {helps.map((help) => (
            <Disclosure key={help.id}>
              {({ open }) => (
                <div className="mb-5 xl:mb-10">
                  <Disclosure.Button
                    className={`flex w-full items-center justify-between rounded-lg border border-gray-thin py-7 px-6 xl:py-11 xl:px-20 ${
                      open && 'rounded-b-none border-b-0'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-5 h-12 w-auto">{help.icon}</span>
                      <span>{help.name}</span>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border p-2 text-primary xl:h-16 xl:w-16 xl:p-4">
                      <ChevronIcon className={`transform ${open && 'rotate-90'}`} />
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="rounded-b-lg border border-t-0 border-gray-light px-6 pb-10 xl:px-20">
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
                        rightIcon={<RightIcon />}
                      >
                        Fill the form
                      </Button>
                    </Link>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
Home.Layout = 'Main'
