import React, { useState } from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { RightIcon } from '@components/Icons'
import Image from 'next/image'

const data = [
  {
    id: 1,
    title: 'Visit Of The Training Center Of The Chamber',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.',
    time: '31.01.2022',
    image: '/image1.jpg',
    isButtonVisuable: true,
  },
  {
    id: 2,
    title: 'Visit Of The Training Center Of The Chamber',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Montes sit mattis urna faucibus habitasse.',
    secondInfo:
      'Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna.  turpis tempus eu. Montes sit mattis urna. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu.',
    time: '31.01.2022',
    image: '/image1.jpg',
  },
  {
    id: 3,
    title: 'Visit Of The Training Center Of The Chamber',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.',
    secondInfo:
      'Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna.  turpis tempus eu. Montes sit mattis urna. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu.',
    time: '31.01.2022',
    image: '/image1.jpg',
  },
]

const News = () => {
  const [showMore, setShowMore] = useState<boolean>(false)
  const [showModeId, setShowModeId] = useState<number>()

  const handleShowMore = (id: number, variant?: string) => {
    if (variant === 'Open') {
      setShowModeId(id)
      setShowMore(true)
    } else if (variant === 'Close') {
      setShowMore(false)
    }
  }

  const showMoreInfo = (id: number) => {
    if (showMore && id === showModeId) {
      return true
    }

    return false
  }

  return (
    <Container className="xl:pb=[182px] pb-[152px]">
      <div className="border-b border-gray-thin">
        <div className="mt-5 flex w-full justify-between border-b border-gray-thin pb-5 xl:pb-10">
          <div>
            <h1 className="text-xl text-black ">Events</h1>
            <p className="mt-2.5 text-base text-black-light xl:mt-5 xl:text-lg">
              Keep up with the following events
            </p>
          </div>
          <div className="hidden xl:flex">
            <p className="text-base text-black-light">Home / Events</p>
          </div>
        </div>
        {data.map((item) => (
          <div
            key={item.id}
            className="hover:rounded-2.5 mt-5 flex flex-col rounded border border-gray-thin p-5 hover:border-primary xl:mt-[60px] xl:flex-row xl:items-start xl:justify-between"
          >
            <div className="xl:w-[35%]">
              <Image
                src={item.image}
                width={500}
                height={320}
                alt="picture"
                className="h-full w-full"
              />
              {showMore ? (
                <div>
                  {item.secondInfo && showModeId === item.id ? (
                    <p className="mt-5 text-base text-black-light">{item.secondInfo}</p>
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="xl:w-[60%]">
              <h2 className="mt-5 text-xl text-black xl:mt-0 xl:text-2xl">{item.time}</h2>
              <p className="mt-2.5 text-lg text-black">{item.title}</p>

              <p className="mt-2.5 text-base text-black-light">
                {showMoreInfo(item.id) ? item.info : `${item.info.substring(0, 130)}`}
              </p>
              <p className="mt-5 text-sm text-black-light xl:hidden">{item.time}</p>
              <div className="mb-5 mt-5 xl:hidden">
                <Button
                  className="w-full xl:hidden xl:pl-0"
                  onClick={() => handleShowMore(item.id, showMoreInfo(item.id) ? 'Close' : 'Open')}
                  variant={showMoreInfo(item.id) ? 'outlined' : 'contained'}
                >
                  {showMoreInfo(item.id) ? 'Close' : 'Read All'}
                </Button>
              </div>
              {!item.isButtonVisuable ? (
                <div>
                  <Button
                    onClick={() =>
                      handleShowMore(item.id, showMoreInfo(item.id) ? 'Close' : 'Open')
                    }
                    variant={showMoreInfo(item.id) ? 'outlined' : 'text'}
                    rightIcon={showMoreInfo(item.id) ? null : <RightIcon fill="fill-primary" />}
                    className={`hidden pl-0  xl:mt-[30px] xl:flex ${
                      showMoreInfo(item.id) ? 'w-full' : ' '
                    }`}
                  >
                    {showMoreInfo(item.id) ? 'Close' : 'Read more'}
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default News