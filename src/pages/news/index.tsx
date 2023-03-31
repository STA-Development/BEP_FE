import React from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { RightIcon } from '@components/Icons'
import Image from 'next/image'

// TODO Mock data
const data = [
  {
    id: 1,
    title: 'Visit Of The Training Center Of The Chamber Of Craftsmen (Handwerkskammer Zu Leipzig)',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.',
    time: '22.01.2022',
    image: '/imag1.jpg',
  },
  {
    id: 2,
    title: '“Summer Camp / Business School” 2022',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.',
    time: '22.01.2022',
    image: '/image2.jpg',
  },
  {
    id: 3,
    title: 'Visit Of The Training Center Of The Chamber Of Craftsmen (Handwerkskammer Zu Leipzig)',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.',
    time: '22.01.2022',
    image: '/imag1.jpg',
  },
  {
    id: 4,
    title: '“Summer Camp / Business School” 2022',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.',
    time: '22.01.2022',
    image: '/image2.jpg',
  },
]

const News = () => (
  <Container className="px-5 pb-7 xl:pb-[135px]">
    <div>
      <div className="mt-10 flex w-full justify-between border-b border-gray-thin pb-10">
        <div>
          <h1 className="text-xl text-black ">News</h1>
          <p className="mt-5 text-base text-black-light xl:text-lg">
            The Latest News from our Foundation
          </p>
        </div>
        <div className="hidden xl:flex">
          <p className="text-base text-black-light">Home / News</p>
        </div>
      </div>
      <div>
        {data.map((item) => (
          <div
            key={item.id}
            className="group mt-10 flex w-full flex-col-reverse justify-between rounded border border-gray-thin p-5 xl:p-10 xl:odd:flex-row xl:even:flex-row-reverse"
          >
            <div className="w-full items-start  justify-start xl:w-[60%]">
              <h1 className="mt-5  text-lg text-black xl:mt-0">{item.title}</h1>
              <p className="mt-5 text-base   text-black-light">{item.info}</p>
              <p className="mt-10 text-sm text-black-light xl:hidden">{item.time}</p>
              <Button
                variant="text"
                rightIcon={<RightIcon fill="fill-primary" />}
                className=" hidden pl-0 group-odd:mt-5 group-even:mt-[33px] xl:flex"
              >
                Read More
              </Button>
              <Button className="mt-10 w-full xl:hidden xl:pl-0">Read All</Button>
              <p className="hidden text-sm text-black-light group-odd:mt-[50px] group-even:mt-20 xl:flex">
                {item.time}
              </p>
            </div>
            <div className="flex w-full group-odd:justify-start  group-even:justify-end xl:w-[35%]">
              <div className="h-full max-h-[210px] w-full xl:h-full xl:max-h-80  xl:w-full xl:max-w-[500px]">
                <Image
                  src={item.image}
                  alt="picture"
                  height={100}
                  width={100}
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Container>
)

export default News
