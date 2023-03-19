import { Disclosure } from '@headlessui/react'
import Head from 'next/head'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Content } from '@/components/Content'

import { NextPageWithLayout } from './_app'

import aSvg from '~/icons/a.svg'
import bSvg from '~/icons/b.svg'
import cSvg from '~/icons/c.svg'
import rightSvg from '~/icons/right.svg'

const data1 = [
  { id: 1, number: '43', text: 'Lorem ipsum dolor sit amet consectetur' },
  { id: 2, number: '200+', text: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 3, number: '95', text: 'Lorem ipsum dolor sit amet consecteturamet.' },
]

const helps = [
  { id: 1, name: 'Masters' },
  { id: 2, name: 'Companies' },
  { id: 3, name: 'Educational Institutes' },
  { id: 4, name: 'Monitoring Systems' },
  { id: 5, name: 'Jobs' },
  { id: 6, name: 'Practice' },
]

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>BEP Armenia</title>
      </Head>
      <div>
        <div className="grid grid-cols-1">
          <Content img={aSvg}>
            <h2 className="text-2xl md:mb-5 mb-2.5">
              Business and Education Partnership Foundation
            </h2>
            <p className="text-lg mb-10 text-black-light">
              Lorem ipsum dolor sit amet consectetur. Massa sed.
            </p>
            <Button
              size="lg"
              rightIcon={rightSvg}
            >
              Start now
            </Button>
          </Content>

          <div className="md:bg-[#3267891a] bg-white order-last md:order-none">
            <div className="container mx-auto px-5">
              <div className="flex justify-between md:grid-cols-3 grid-cols-1 py-10">
                {data1.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-center md:border-b-0 border-b border-gray last:border-none md:py-0 py-10"
                  >
                    <span className="md:text-blue text-black md:text-[64px] text-64 mr-5">
                      {item.number}
                    </span>
                    <span className="md:text-black-light text-black-light md:text-[18px] text-2xl md:max-w-200">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Content img={bSvg}>
            <h2 className="text-2xl md:mb-5 mb-2.5">What is BEP?</h2>
            <p className="text-lg mb-10 text-black-light">
              “Business and Education Partnership” Foundation has been implementing the activities
              aimed at supporting the sustainable development and enhancement of the Armenian
              education system through introduction of innovative education models and mechanisms
              based on advanced international experience, as well as providing an assistance to the
              result-oriented process of vocational training.
            </p>
            <Button
              size="lg"
              href="/fill-the-form"
              rightIcon={rightSvg}
            >
              Fill the form
            </Button>
          </Content>
        </div>

        <div className="container">
          <h2 className="md:text-64 text-[32px] md:mb-5 mb-2.5">How can we help?</h2>

          <div>
            {helps.map((help) => (
              <Disclosure key={help.id}>
                {({ open }) => (
                  <div className=" mb-10">
                    <Disclosure.Button
                      className={`md:py-11 py-7 md:px-20 px-6 flex justify-between items-center w-full border border-gray-light rounded-lg ${
                        open && 'rounded-b-none border-b-0'
                      }`}
                    >
                      <div className="flex items-center">
                        <Image
                          src={cSvg}
                          alt="Picture of the author"
                          className="mr-5 h-12 w-auto"
                        />
                        <span>{help.name}</span>
                      </div>
                      <div className="md:h-16 md:w-16 md:p-4 h-9 w-9 p-2 border rounded-full text-blue">
                        {/*<ChevronUpIcon*/}
                        {/*  className={`${open ? 'rotate-180 transform' : 'rotate-90 transform'}`}*/}
                        {/*/>*/}
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="pb-10 md:px-20 px-6 border border-t-0 border-gray-light rounded-b-lg">
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
                      <Button
                        size="lg"
                        href="/fill-the-form"
                        rightIcon={rightSvg}
                      >
                        Fill the form
                      </Button>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
Home.Layout = 'Main'
