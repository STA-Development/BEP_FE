import React from 'react'
import { INewsProps } from '@allTypes/news'
import { Container } from '@components/Container/Container'
import { PageHeader } from '@components/PageHeader'
import SingleNews from '@pages/news/SingleNews'
import { uuid } from 'uuidv4'

const NewsList = () => {
  const newsList = [
    // TODO: Consider refactoring hardcoded data
    {
      id: uuid(),
      title: 'Visit Of The Training Center',
      description:
        'Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ' +
        'ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame',
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2022/12/Snowy-christmas-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: uuid(),
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2022/12/Snowy-christmas-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: uuid(),
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/05/Grand-Canyon-National-Park-Arizona-USA-Red-Clouds-Sunset-Landscape-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: uuid(),
      title: 'Visit Of The Training Center',
      description: 'Lorem ipsum dolor sit ame',
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: uuid(),
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: uuid(),
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
      date: '22.01.2022',
    },
    {
      id: uuid(),
      title: 'Visit Of The Training Center',
      description: 'Lorem ipsum dolor sit ame',
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
      date: '22.01.2022',
    },
  ]

  return (
    <Container>
      <PageHeader
        title="News"
        paths={['Home', 'News']}
      />
      <p className="text-base text-gray-500">The Latest News From our Foundation</p>
      {newsList.map((news: INewsProps) => (
        <SingleNews news={news} />
      ))}
    </Container>
  )
}

export default NewsList
