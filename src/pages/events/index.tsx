import React, { useState } from 'react'
import { Container } from '@components/Container'
import { RightIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@UIComponents/Button'
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
      <PageHeader
        title="Events"
        description="Keep up with the following events"
        paths={['Home', 'Events']}
      />
      <div className="pt-5 xl:pt-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="border-outline mb-5 flex flex-col rounded p-10
                xl:mb-10 xl:flex-row xl:items-start xl:justify-between xl:gap-10"
          >
            <div className="xl:flex-initial">
              <Image
                src={item.image}
                width={500}
                height={320}
                alt="picture"
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
                <div className="py-7.5">
                  {item.id === showModeId ? (
                    <Button
                      variant="outlined"
                      size="fl"
                      onClick={() => setShowModeId(null)}
                    >
                      Close
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="text"
                        size="xs"
                        RightIcon={RightIcon}
                        className="hidden xl:flex"
                        onClick={() => handleShowMore(item.id)}
                      >
                        Read more
                      </Button>
                      <Button
                        size="fl"
                        className="xl:hidden"
                        onClick={() => handleShowMore(item.id)}
                      >
                        Read more
                      </Button>
                    </>
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
