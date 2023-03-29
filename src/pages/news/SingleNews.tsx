import React from 'react'
import { Button } from '@components/Button'
import ChangeColor from '@components/IconSVG/ChangeColor'

const SingleNews = ({
  title,
  description,
  imageUrl,
  index,
}: {
  title: string
  description: string
  imageUrl: string
  index: number
}) => (
  <div className="container">
    <div className="my-10 grid grid-cols-2 items-center rounded-lg border-2 border-solid border-gray-thin p-8 hover:border-primary">
      <div className={`${index % 2 === 1 ? 'order-last' : ''} mr-4 space-y-4`}>
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <Button
          size="lg"
          className="border-transparent bg-transparent pl-0 pt-0 pb-4 text-cyan-800 hover:border-transparent hover:bg-transparent"
        >
          Read More
          <ChangeColor color="fill-cyan-800 ml-4" />
        </Button>
        <p className="text-gray-500">22.01.2022</p>
      </div>
      <div className={`${index % 2 === 1 ? 'order-first' : ''}`}>
        <img
          className={`${index % 2 === 0 ? 'ml-auto' : ''} max-w-md rounded-md`}
          src={imageUrl}
          alt=""
        />
      </div>
    </div>
  </div>
)

export default SingleNews

SingleNews.Layout = 'Main'
