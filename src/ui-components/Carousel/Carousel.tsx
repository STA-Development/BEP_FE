import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IEventsListProps } from '@allTypes/reduxTypes/eventsStateTypes'
import { INewsResponse } from '@axios/news/newsManagerTypes'
import { ChevronIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'

interface ICarouselProps {
  title: string
  slider: IEventsListProps[] | INewsResponse[]
  redirectToIndividual: (id: string) => void
}

export const Carousel = ({ redirectToIndividual, slider, title }: ICarouselProps) => {
  const [t] = useTranslation()

  const [currentIndex, setCurrentIndex] = useState(0)

  const carousel = useRef<HTMLDivElement>(null)

  const maxScrollWidth = useRef(0)

  const moveNext = () => {
    if (carousel.current && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  useEffect(() => {
    if (carousel && carousel.current) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0
  }, [slider])

  return (
    <div>
      <div className="mb-5 flex flex-col items-start justify-between xl:mb-10 xl:flex-row">
        <h2 className="mb-5 text-xl font-medium xl:mb-0 xl:text-2xl">{title}</h2>
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
            key={item.uuid}
            className="flex w-full min-w-[360px] snap-start flex-col rounded border border-gray-thin bg-secondary p-5 xl:min-w-[380px]"
          >
            <Image
              src={item.imageURL ?? ''}
              alt="news"
              loader={() => item.imageURL}
              width={340}
              height={222}
              className="mb-5 h-full max-h-[222px] w-full max-w-[340px] object-cover"
            />
            <div className="flex h-[300px] flex-col justify-between">
              <div className="flex h-[150px] w-full flex-col justify-between">
                <h3 className="mb-2.5 h-[90px] text-xl line-clamp-2">{item.header}</h3>
                <p className="h-[45px] text-black-light line-clamp-2 ">{item.paragraph}</p>
              </div>
              <div className="flex w-full flex-col items-center justify-center">
                <p className="mb-10 text-black-light line-clamp-2 ">{item.postedAt}</p>
                <Button
                  size="fl"
                  variant="outlined"
                  onClick={() => redirectToIndividual(item.uuid)}
                >
                  {t(Translation.HOME_PAGE_CAROUSEL_READ_ALL_BUTTON)}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
