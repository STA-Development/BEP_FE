import React from 'react'
import { Container } from '@components/Container/Container'
import { RightIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { dispatch } from '@redux/hooks'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'

export interface INewsProps {
  id: number
  title: string
  description: string
  imageURL: string
  date: string
}

const NewsList = () => {
  const newsList: INewsProps[] = [
    // TODO: Consider refactoring hardcoded data
    {
      id: Math.random(),
      title: 'Visit Of The Training Center',
      description:
        'Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ' +
        'ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame',
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2022/12/Snowy-christmas-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: Math.random(),
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2022/12/Snowy-christmas-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: Math.random(),
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/05/Grand-Canyon-National-Park-Arizona-USA-Red-Clouds-Sunset-Landscape-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: Math.random(),
      title: 'Visit Of The Training Center',
      description: 'Lorem ipsum dolor sit ame',
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: Math.random(),
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: Math.random(),
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: Math.random(),
      title: 'Visit Of The Training Center',
      description: 'Lorem ipsum dolor sit ame',
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
      date: '22.01.2022',
    },
  ]

  const redirectToIndividualNews = (id: number) => {
    dispatch(
      viewsMiddleware.setRedirectionState({
        path: `/news/individual/${id}`,
        params: '',
        apply: true,
      })
    )
  }

  return (
    <Container>
      <PageHeader
        title="News"
        paths={['Home', 'News']}
        description="The Latest News From our Foundation"
      />
      {newsList.map((news: INewsProps) => (
        <div
          key={news.id}
          className="border-outline mx-auto my-10 grid grid-cols-1 items-center justify-between rounded p-8 xl:grid-cols-2"
        >
          <div className="order-last mb-4 ml-4 space-y-4 xl:order-first">
            <h2 className="text-lg font-medium">{news.title}</h2>
            <p className="text-black-light">{news.description}</p>
            <Button
              variant="text"
              size="xs"
              RightIcon={RightIcon}
              onClick={() => redirectToIndividualNews(news.id)}
            >
              Read More
            </Button>
            <p className="mt-4 text-black-light">{news.date}</p>
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
