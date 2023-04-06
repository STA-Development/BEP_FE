import React, { useEffect, useRef, useState } from 'react'
import { Container } from '@components/Container'
import { ChevronIcon } from '@components/Icons'
import { Button } from '@UIComponents/Button'
import Image from 'next/image'

export const NewsCarousel = () => {
  const [slider] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0
  }, [])

  return (
    <Container
      color="secondary"
      className="pt-10 pb-30 xl:pt-30"
    >
      <div className="flex items-start justify-between">
        <h2 className="mb-10 text-xl font-semibold font-medium xl:text-2xl">News:</h2>
        <div className="flex gap-10">
          <Button
            color="secondary"
            onClick={movePrev}
            className="group h-16 rounded-full border-0"
          >
            <ChevronIcon className="rotate-180 transform group-hover:fill-secondary" />
          </Button>
          <Button
            color="secondary"
            onClick={moveNext}
            className="group h-16 rounded-full border-0"
          >
            <ChevronIcon className="transform group-hover:fill-secondary" />
          </Button>
        </div>
      </div>

      <div
        ref={carousel}
        className="relative z-0 flex touch-pan-x snap-x snap-mandatory gap-7.5 overflow-hidden scroll-smooth"
      >
        {slider.map((item) => (
          <div
            key={item}
            className="min-w-[380px] snap-start rounded border border-gray-thin bg-secondary p-5"
          >
            <Image
              src="/image1.jpg"
              alt="news"
              width={340}
              height={222}
              className="mb-5"
            />
            <h3 className="mb-2.5 text-lg">
              <b>{item}</b>: “Summer Camp / Business School” 2022
            </h3>
            <p className="mb-5 text-base text-black-light">
              Lorem ipsum dolor sit amet consectetur. Accumsan nisl luctus nunc condimentum nec
              tincidunt dolor magna nisl. Posuere scelerisque feugiat et lectus vitae arcu et
              ornare. Curabitur vel velit tortor lacus. Gravida dictumst vulputate elit morbi urna
              at.
            </p>
            <p className="mb-5 text-sm text-black-light xl:mb-8">22.01.2022</p>
            <Button size="fl">Read All</Button>
          </div>
        ))}
      </div>
    </Container>
  )
}
