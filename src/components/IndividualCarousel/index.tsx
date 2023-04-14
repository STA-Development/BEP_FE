import React, { useEffect, useRef, useState } from 'react'
import { Container } from '@components/Container'
import { ChevronIcon } from '@components/Icons'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'

export const IndividualCarousel = () => {
  const [slider] = useState<number[]>([1, 2, 3])

  const maxScrollWidth = useRef<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
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
      console.log(carousel.current.offsetWidth)
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
    <Container className=" flex w-full overflow-hidden">
      <div className="relative top-1/2 flex w-full items-center justify-center">
        <div className=" flex w-[400px] flex-row">
          <div className="z-40 flex w-1/2 items-start">
            <Button
              variant="text"
              size="sm"
              onClick={movePrev}
              className="group h-16 border-0"
            >
              <ChevronIcon className="rotate-180 transform group-hover:fill-secondary" />
            </Button>
          </div>
          <div className="z-40 flex w-1/2 justify-end">
            <Button
              variant="text"
              color="secondary"
              onClick={moveNext}
              className="group h-16 border-0"
            >
              <ChevronIcon className="transform group-hover:fill-secondary" />
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={carousel}
        className="relative z-0 m-auto flex w-[400px] touch-pan-x snap-x snap-mandatory
        gap-7.5 overflow-hidden scroll-smooth"
      >
        {slider.map((item) => (
          <div
            key={item}
            className="min-w-[400px] snap-start rounded border border-gray-thin bg-secondary p-5"
          >
            <Image
              src="/image1.jpg"
              alt="news"
              width={700}
              height={222}
              className="mb-5"
            />
          </div>
        ))}
      </div>
    </Container>
  )
}
