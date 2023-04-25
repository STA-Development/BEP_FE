import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { newsMiddleware, newsSelector } from '@redux/slices/news'
import Image from 'next/image'
import { useRouter } from 'next/router'

const IndividualNewsPage = () => {
  const [t] = useTranslation()

  const router = useRouter()
  const newsId = router.query.id

  const individualNews = useAppSelector(newsSelector.individualNews)

  useEffect(() => {
    if (newsId) {
      dispatch(newsMiddleware.getIndividualNewsById(newsId as string))
    }
  }, [newsId])

  return (
    <Container className="pb-30">
      <PageHeader
        title={t(Translation.PAGE_NEWS_INDIVIDUAL_TITLE)}
        description={t(Translation.PAGE_NEWS_INDIVIDUAL_DESCRIPTION) as string}
        paths={['Home', 'Events']}
      />
      <div className="pt-5 xl:pt-10">
        <div className="justify-between xl:flex">
          <Image
            className="order-last xl:mb-20 xl:ml-30"
            src={individualNews?.imageURL as string}
            loader={() => individualNews?.imageURL ?? ''}
            width={500}
            height={680}
            alt="picture"
          />
          <div>
            <p className="mt-5 text-lg text-black">{individualNews?.header}</p>
            <p className="mt-5 text-base text-black-light xl:mt-15">{individualNews?.paragraph}</p>
          </div>
        </div>
        <p className="mt-10 text-black-light xl:mt-20">{individualNews?.postedAt}</p>
      </div>
    </Container>
  )
}

export default IndividualNewsPage
