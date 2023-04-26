import React, { useEffect, useRef, useState } from 'react'
import { Container } from '@components/Container'
import { ChevronIcon, RightIcon } from '@components/Icons'
import { dispatch, useAppSelector } from '@redux/hooks'
import { eventsSelector } from '@redux/slices/events'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const EventsCarusel = () => {
  const { eventsList: slider } = useAppSelector(eventsSelector.eventsData)

  const router = useRouter()

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

  const redirectToIndividualNews = (id: string) => {
    dispatch(
      viewsMiddleware.setRedirectionState({
        path: `/events/${id}`,
        params: '',
        apply: true,
      })
    )
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
  }, [slider])

  return (
    <Container
      color="secondary"
      className="pb-30 pt-10 xl:pt-10"
    >
      <div className="flex items-start justify-between">
        <h2 className="mb-10 text-xl font-medium font-semibold xl:text-2xl">Events:</h2>
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
            className="min-w-[380px] snap-start rounded border border-gray-thin bg-secondary p-5"
          >
            <Image
              src={item.imageURL}
              alt="news"
              loader={() => item.imageURL}
              width={340}
              height={222}
              className="mb-5 h-full max-h-[221px] w-full max-w-[340px] object-cover"
            />
            <h3 className="mb-2.5 text-2xl">{item.postedAt}</h3>
            <div className="mb-5 h-18">
              <p className="text-lg text-black-light line-clamp-2 ">{item.header}</p>
            </div>

            <Button
              size="fl"
              variant="outlined"
              onClick={() => redirectToIndividualNews(item.uuid)}
            >
              Read All
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-10 flex w-full justify-center">
        <Button
          size="bs"
          RightIcon={RightIcon}
          onClick={() => router.push('/events')}
        >
          Show All events
        </Button>
      </div>
    </Container>
  )
}
