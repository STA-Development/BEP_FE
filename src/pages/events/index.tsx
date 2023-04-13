import React, { useEffect, useState } from 'react'
import { IEventsDataType } from '@allTypes/reduxTypes/eventsStateTypes'
import { Container } from '@components/Container'
import { RightIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { dispatch, useAppSelector } from '@redux/hooks'
import { eventsMiddleware, eventsSelector } from '@redux/slices/events'
import { Button } from '@uiComponents/Button'
import Loading from '@uiComponents/Loading'
import Image from 'next/image'

const Events = () => {
  const [page, setPage] = useState<number>(1)
  const { eventsData, pageSize, isEventsLoading } = useAppSelector(eventsSelector.events)

  useEffect(() => {
    dispatch(eventsMiddleware.events(page))
  }, [page])

  const onScroll = () => {
    if (page < pageSize) {
      const { scrollTop } = document.documentElement
      const { scrollHeight } = document.documentElement
      const { clientHeight } = document.documentElement

      if (scrollTop + clientHeight + 600 >= scrollHeight) {
        setPage(page + 1)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventsData])

  return (
    <Container className="pb-30">
      <PageHeader
        title="Events"
        description="Keep up with the following events"
        paths={['Home', 'Events']}
      />
      <div className="pt-5 xl:pt-10">
        {isEventsLoading && !eventsData.length ? (
          <Loading />
        ) : (
          <div>
            {eventsData?.map((item: IEventsDataType) => (
              <div
                key={Math.random()}
                className="border-outline mb-5 flex flex-col rounded p-10
                xl:mb-10 xl:flex-row xl:items-start xl:justify-between xl:gap-10"
              >
                <div className="xl:flex-initial">
                  <Image
                    src={item.imageURL}
                    width={500}
                    height={320}
                    alt="picture"
                    className="h-[320px] w-[500px] object-cover"
                  />
                </div>
                <div className="xl:flex-1">
                  <h2 className="mt-5 text-xl text-black xl:mt-0 xl:text-2xl">{item.postedAt}</h2>
                  <p className="mt-2.5 text-lg text-black">{item.header}</p>
                  <p className="text-base text-black-light xl:mt-2.5">{item.paragraph}</p>
                  {!item.hasLongParagraph ? (
                    <div className="py-7.5">
                      <Button
                        variant="text"
                        size="xs"
                        RightIcon={RightIcon}
                        className="hidden xl:flex"
                      >
                        Read more
                      </Button>
                      <Button
                        size="fl"
                        className="xl:hidden"
                      >
                        Read more
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}

export default Events
