import React, { useEffect } from 'react'
import { INewsResponse } from '@axios/news/newsManagerTypes'
import { Container } from '@components/Container/Container'
import { RightIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { dispatch, useAppSelector } from '@redux/hooks'
import { newsMiddleware, newsSelector } from '@redux/slices/news'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'

const NewsList = () => {
  const newsList = useAppSelector(newsSelector.newsList)

  const redirectToIndividualNews = (id: string) => {
    dispatch(
      viewsMiddleware.setRedirectionState({
        path: `/news/${id}`,
        params: '',
        apply: true,
      })
    )
  }

  useEffect(() => {
    // TODO: Integrate pagination
    dispatch(newsMiddleware.getNewsList(1))
  }, [])

  // TODO: Add loader to image after events page is done
  return (
    <Container>
      <PageHeader
        title="News"
        paths={['Home', 'News']}
        description="The Latest News From our Foundation"
      />
      {newsList?.map((news: INewsResponse) => (
        <div
          key={news.uuid}
          className="border-outline mx-auto my-10 grid grid-cols-1 items-center justify-between rounded p-8 xl:grid-cols-2"
        >
          <div className="order-last mb-4 ml-4 space-y-4 xl:order-first">
            <h2 className="text-lg font-medium">{news.header}</h2>
            <p className="text-black-light">{news.paragraph}</p>
            <Button
              variant="text"
              size="xs"
              RightIcon={RightIcon}
              onClick={() => redirectToIndividualNews(news.uuid)}
            >
              Read More
            </Button>
            <p className="mt-4 text-black-light">{news.postedAt}</p>
          </div>
          <div className="pb-5 xl:shrink-0">
            <Image
              src={news.imageURL}
              alt="img"
              loader={() => news.imageURL}
              height={320}
              width={320}
              className="ml-auto w-full max-w-md rounded object-cover max-xl:mx-auto"
            />
          </div>
        </div>
      ))}
    </Container>
  )
}

export default NewsList
