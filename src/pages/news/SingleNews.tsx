import React from 'react'
import { INewsProps } from '@allTypes/news'
import { Button } from '@components/Button'
import { RightIcon } from '@components/Icons/RightIcon'
import Image from 'next/image'

const SingleNews = ({ news }: { news: INewsProps }) => (
  <div
    key={news.id}
    className="my-10 mx-auto grid grid-cols-1 items-center rounded-lg border-2 border-solid border-gray-thin p-8 hover:border-primary xl:grid-cols-2"
  >
    <div className="order-last ml-4 mb-4 space-y-4 xl:order-first">
      <h2 className="text-lg font-medium">{news.title}</h2>
      <p className="text-gray-500">{news.description}</p>
      <Button
        variant="text"
        RightIcon={RightIcon}
        className="border-transparent bg-transparent pl-0 pt-0 pb-4 text-cyan-800 hover:border-transparent hover:bg-transparent"
      >
        Read More
      </Button>
      <p className="text-gray-500">{news.date}</p>
    </div>
    <div className="pb-5 xl:shrink-0 xl:pb-0">
      <Image
        src={news.imageURL}
        alt="img"
        loader={() => news.imageURL}
        height={320}
        width={320}
        className="ml-auto w-full max-w-md rounded-md object-cover max-xl:mx-auto"
      />
    </div>
  </div>
)

export default SingleNews
