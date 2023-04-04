import React, { useState } from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { RightIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import Image from 'next/image'

const data = [
  {
    id: 1,
    title: 'Visit Of The Training Center Of The Chamber',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.',
    time: '31.01.2022',
    image: '/image1.jpg',
    isButtonVisible: true,
  },
  {
    id: 2,
    title: 'Visit Of The Training Center Of The Chamber',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Montes sit mattis urna faucibus habitasse.',
    secondInfo:
      'Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna.  turpis tempus eu. Montes sit mattis urna. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu.',
    time: '31.01.2022',
    image: '/image1.jpg',
    isButtonVisible: false,
  },
  {
    id: 3,
    title: 'Visit Of The Training Center Of The Chamber',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.',
    time: '31.01.2022',
    image: '/image1.jpg',
    isButtonVisible: false,
  },
]

const Events = () => {
  const [showModeId, setShowModeId] = useState<number | null>()

  const handleShowMore = (id: number) => {
    setShowModeId(id)
  }

  return (
    <Container className="pb-30">
      <div className="border-b border-gray-thin">
        <div className="mt-5 w-full border-b border-gray-thin">
          <PageHeader
            title="Events"
            description="Keep up with the following events"
            breadcrumbs
          />
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="hover:rounded-2.5 mt-5 flex flex-col rounded p-10 outline-2 outline-gray-thin hover:outline-2 hover:outline-primary xl:mt-10 xl:flex-row xl:items-start xl:justify-between xl:gap-10"
          >
            <div className="xl:flex-none">
              <Image
                src={item.image}
                width={500}
                height={320}
                alt="picture"
                className="h-full w-full"
              />
              <div className="hidden xl:flex xl:w-full xl:max-w-[500px]">
                {item.secondInfo && item.id === showModeId ? (
                  <p className="mt-5 text-base text-black-light xl:mt-15">{item.secondInfo}</p>
                ) : null}
              </div>
            </div>
            <div className="xl:flex-1">
              <h2 className="mt-5 text-xl text-black xl:mt-0 xl:text-2xl">{item.time}</h2>
              <p className="mt-2.5 text-lg text-black">{item.title}</p>
              {item.secondInfo && item.id === showModeId ? (
                <p className="text-base text-black-light">{item.secondInfo}</p>
              ) : null}
              <p className="text-base text-black-light xl:mt-2.5">
                {item.id === showModeId ? item.info : `${item.info.substring(0, 130)}`}
              </p>
              <p className="mt-5 text-sm text-black-light xl:hidden">{item.time}</p>
              {!item.isButtonVisible ? (
                <div className="md:w-full mb-5 mt-5">
                  {item.id === showModeId ? (
                    <Button
                      onClick={() => setShowModeId(null)}
                      variant="outlined"
                      className="w-full pl-0 xl:mt-7.5 "
                    >
                      Close
                    </Button>
                  ) : (
                    <div>
                      <Button
                        onClick={() => handleShowMore(item.id)}
                        variant="text"
                        rightIcon={<RightIcon fill="fill-primary" />}
                        className="hidden w-full xl:mt-7.5 xl:flex xl:w-auto xl:pl-0"
                      >
                        Read more
                      </Button>
                      <Button
                        className="w-full xl:hidden xl:pl-0"
                        onClick={() => handleShowMore(item.id)}
                      >
                        Read more
                      </Button>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Events
