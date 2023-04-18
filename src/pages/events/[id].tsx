import React, { useEffect } from 'react'
import { Container } from '@components/Container'
import { PageHeader } from '@components/PageHeader'
import { dispatch, useAppSelector } from '@redux/hooks'
import { eventsMiddleware, eventsSelector } from '@redux/slices/events'
import Image from 'next/image'
import { useRouter } from 'next/router'

const IndividualEventPage = () => {
  const router = useRouter()
  const eventsId = router.query.id

  const individualEvents = useAppSelector(eventsSelector.individualEvents)

  useEffect(() => {
    if (eventsId) {
      dispatch(eventsMiddleware.getIndividualEventsById(eventsId as string))
    }
  }, [eventsId])

  return (
    <Container className="pb-30">
      <PageHeader
        title="Events"
        description="Keep up with the following events"
        paths={['Home', 'Events']}
      />
      <div className="flex flex-col-reverse xl:flex-row xl:justify-between xl:pt-10">
        <div>
          <h2 className="mt-5 text-xl text-black xl:mt-0 xl:text-2xl">
            {individualEvents?.postedAt}
          </h2>
          <p className="mt-2.5 text-lg text-black xl:mt-5">{individualEvents?.header}</p>
          <p className="mt-2.5 text-lg text-black xl:mt-5">{individualEvents?.paragraph}</p>
        </div>
        <div>
          <Image
            src={individualEvents?.imageURL as string}
            loader={() => individualEvents?.imageURL ?? ''}
            width={500}
            height={680}
            alt="picture"
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <p className="mt-10 text-black-light xl:mt-20">{individualEvents?.postedAt}</p>
      </div>
    </Container>
  )
}

export default IndividualEventPage
