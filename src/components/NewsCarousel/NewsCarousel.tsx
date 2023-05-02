import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { RightIcon } from '@components/Icons'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { newsSelector } from '@redux/slices/news'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'
import { Carousel } from '@uiComponents/Carousel'
import { useRouter } from 'next/router'

export const NewsCarousel = () => {
  const [t] = useTranslation()
  const { newsList: slider } = useAppSelector(newsSelector.news)

  const router = useRouter()

  const redirectToIndividualNews = (id: string) => {
    dispatch(
      viewsMiddleware.setRedirectionState({
        path: `/news/${id}`,
        params: '',
        apply: true,
      })
    )
  }

  return (
    <Container
      color="secondary"
      className="pb-30 pt-10 xl:pt-30"
    >
      <Carousel
        redirectToIndividual={redirectToIndividualNews}
        slider={slider}
        title={`${t(Translation.HOME_PAGE_NEWS_CAROUSEL_TITLE)}`}
      />
      <div className="mt-10 flex w-full justify-center">
        <Button
          size="bs"
          RightIcon={RightIcon}
          onClick={() => router.push('/news')}
        >
          {t(Translation.HOME_PAGE_NEWS_CAROUSEL_SHOW_ALL_BUTTON)}
        </Button>
      </div>
    </Container>
  )
}
