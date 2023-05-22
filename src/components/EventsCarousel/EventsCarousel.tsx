import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { RightIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { eventsMiddleware, eventsSelector } from '@redux/slices/events'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'
import { Carousel } from '@uiComponents/Carousel'
import { useRouter } from 'next/router'

export const EventsCarousel = () => {
  const { eventsList } = useAppSelector(eventsSelector.eventsData)
  const [t] = useTranslation()
  const router = useRouter()

  const redirectToIndividualEvents = (id: string) => {
    dispatch(
      viewsMiddleware.setRedirectionState({
        path: `/events/${id}`,
        params: '',
        apply: true,
      })
    )
  }

  useEffect(() => {
    dispatch(eventsMiddleware.getEventsList(1))
  }, [])

  if (!eventsList.length) {
    return null
  }

  return (
    <Container
      color="wave"
      className="pb-30 pt-10 xl:pt-10"
    >
      <Carousel
        redirectToIndividual={redirectToIndividualEvents}
        slider={eventsList}
        title={`${t(Translation.HOME_PAGE_EVENTS_CAROUSEL_TITLE)}`}
      />
      <div className="mt-10 flex w-full justify-center">
        <Button
          size="bs"
          RightIcon={RightIcon}
          onClick={() => router.push('/events')}
        >
          {t(Translation.HOME_PAGE_EVENTS_CAROUSEL_SHOW_ALL_BUTTON)}
        </Button>
      </div>
    </Container>
  )
}
