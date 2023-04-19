import React, { useEffect } from 'react'
import { Container } from '@components/Container'
import { PageHeader } from '@components/PageHeader'
import { dispatch, useAppSelector } from '@redux/hooks'
import { eventsMiddleware, eventsSelector } from '@redux/slices/events'
import { Loading } from '@uiComponents/Loading'
import Image from 'next/image'
import { useRouter } from 'next/router'

const IndividualEventPage = () => {
  const router = useRouter()
  const eventsId = router.query.id

  const singleEvent = useAppSelector(eventsSelector.singleEvent)
  const isSingleEventLoading = useAppSelector(eventsSelector.isSingleEventLoading)

  useEffect(() => {
    if (eventsId) {
      dispatch(eventsMiddleware.fetchSingleEvent(eventsId as string))
    }
  }, [eventsId])

  return (
    <Container className="pb-30">
      <PageHeader
        title="Events"
        description="Keep up with the following events"
        paths={['Home', 'Events']}
      />
      {isSingleEventLoading ? (
        <Loading />
      ) : (
        <div className="pt-5 xl:pt-10">
          <div className="justify-between xl:flex">
            <Image
              className="order-last xl:mb-20 xl:ml-30"
              src={singleEvent?.imageURL as string}
              loader={() => singleEvent?.imageURL ?? ''}
              width={500}
              height={680}
              alt="picture"
            />
            <div>
              <h2 className="text-xl text-black xl:text-2xl">{singleEvent?.header}</h2>
              <p className="mt-5 text-lg text-black">{singleEvent?.postedAt}</p>
              <p className="mt-5 text-base text-black-light">{singleEvent?.paragraph}</p>
            </div>
          </div>
          <p className="mt-10 text-black-light xl:mt-20">22.01.2022</p>
        </div>
      )}
    </Container>
  )
}

export default IndividualEventPage
