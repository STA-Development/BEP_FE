import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { INewsResponse } from '@axios/news/newsManagerTypes'
import { Container } from '@components/Container/Container'
import { RightIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { newsMiddleware, newsSelector } from '@redux/slices/news'
import { usersSelector } from '@redux/slices/users'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PAGE_BOTTOM = 600

const NewsList = () => {
  const [t] = useTranslation()

  const isNewsListLoading = useAppSelector(newsSelector.isNewsListLoading)
  const [page, setPage] = useState<number>(1)
  const { newsList, pageSize, totalItems, isDeleteNewsLoading } = useAppSelector(newsSelector.news)
  const { role } = useAppSelector(usersSelector.user)

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

  useEffect(() => {
    console.log(newsList)
  }, [newsList])

  const onDeleteIndividualNewsModal = useCallback((id: string) => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.DeleteIndividualNewsModal,
        props: {
          id,
        },
      })
    )
  }, [])

  const changeNews = (path: string) => {
    router.push({
      pathname: '/news/change-news',
      query: { path },
    })
  }

  useEffect(() => {
    dispatch(newsMiddleware.getNewsList(page))
  }, [page])

  useEffect(() => {
    dispatch(newsMiddleware.clearNewsList())
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const pageCount = totalItems / pageSize

      if (page < Math.ceil(pageCount) && newsList?.length === page * pageSize) {
        const { scrollTop } = document.documentElement
        const { scrollHeight } = document.documentElement
        const { clientHeight } = document.documentElement

        if (scrollTop + clientHeight + PAGE_BOTTOM > scrollHeight) {
          setPage((prev) => prev + 1)
        }
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [newsList, page, pageSize, totalItems])

  return (
    <Container>
      <PageHeader
        title={t(Translation.PAGE_NEWS_MAIN_TITLE)}
        paths={['Home', 'News']}
        description={t(Translation.PAGE_NEWS_MAIN_DESCRIPTION) as string}
        route="/news/create-news"
        buttonTitle={t(Translation.PAGE_NEWS_ADD_NEWS) as string}
      />
      {(isNewsListLoading && !newsList?.length) || isDeleteNewsLoading ? (
        <Loading />
      ) : (
        <div className="space-y-6">
          {newsList?.map((news: INewsResponse) => (
            <div
              key={news.uuid}
              className="border-outline mx-auto my-10 flex-col items-center rounded p-8"
            >
              {role === Roles.Admin ? (
                <div className="mb-5 flex w-full justify-end">
                  <Button onClick={() => onDeleteIndividualNewsModal(news.uuid)}>
                    Delete News
                  </Button>
                  <Button
                    variant="text"
                    onClick={() => changeNews(news.uuid)}
                  >
                    {t(Translation.PAGE_NEWS_CHANGE_NEWS)}
                  </Button>
                </div>
              ) : null}
              <div className="grid grid-cols-1 justify-between xl:grid-cols-2">
                <div className="order-last mb-4 ml-4 space-y-4 xl:order-first">
                  <h2 className="text-lg font-medium">{news.header}</h2>
                  <p className="text-black-light">{news.paragraph}</p>
                  <Button
                    variant="text"
                    size="xs"
                    RightIcon={RightIcon}
                    onClick={() => redirectToIndividualNews(news.uuid)}
                  >
                    {t(Translation.PAGE_NEWS_ACTIONS_READ_MORE)}
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
            </div>
          ))}
        </div>
      )}
    </Container>
  )
}

export default NewsList
