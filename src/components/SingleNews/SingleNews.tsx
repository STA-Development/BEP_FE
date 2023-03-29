import React from 'react'
import { Button } from '@components/Button'
import { RightIcon } from '@components/Icons/RightIcon'

const SingleNews = ({
  title,
  description,
  imageUrl,
  index,
  key,
}: {
  title: string
  key: string
  description: string
  imageUrl: string
  index: number
}) => {
  const isIndexOdd: boolean = index % 2 === 1

  return (
    <div
      key={key}
      className="my-10 mx-auto grid-cols-2 items-center rounded-lg border-2 border-solid border-gray-thin p-8 hover:border-primary md:grid"
    >
      <div className={`${isIndexOdd ? 'order-last ml-4' : 'mr-4'} mb-4 space-y-4`}>
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <Button
          size="sm"
          className="border-transparent bg-transparent pl-0 pt-0 pb-4 text-cyan-800 hover:border-transparent hover:bg-transparent"
        >
          Read More
          <RightIcon color="fill-cyan-800 ml-4" />
        </Button>
        <p className="text-gray-500">22.01.2022</p>
      </div>
      <div className={`${isIndexOdd ? 'order-first' : ''} md:shrink-0`}>
        <img
          className={`${
            !isIndexOdd ? 'ml-auto' : ''
          } w-full max-w-md rounded-md object-cover max-md:mx-auto`}
          src={imageUrl}
          alt=""
        />
      </div>
    </div>
  )
}

export default SingleNews
