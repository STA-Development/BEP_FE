import { uuid } from 'uuidv4'

import SingleNews from '@/pages/news/SingleNews'

const NewsList = () => {
  const newsList = [
    {
      title: 'Visit Of The Training Center',
      description:
        'Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ' +
        'ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame',
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2015/12/Nature-Lake-Bled.-Desktop-background-image-840x525.jpg',
    },
    {
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2022/12/Snowy-christmas-840x525.jpg',
    },
    {
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/05/Grand-Canyon-National-Park-Arizona-USA-Red-Clouds-Sunset-Landscape-840x525.jpg',
    },
    {
      title: 'Visit Of The Training Center',
      description: 'Lorem ipsum dolor sit ame',
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
    },
    {
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
    },
    {
      title: 'Visit Of The Training Center',
      description:
        "Lorem ipsum dolor sit ame ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'",
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
    },
    {
      title: 'Visit Of The Training Center',
      description: 'Lorem ipsum dolor sit ame',
      imageURL:
        'https://www.wallpapers13.com/wp-content/uploads/2021/04/Milky-Way-over-Crater-Lake-National-Park-Oregon-United-States-840x525.jpg',
    },
  ]
  return (
    <div>
      {newsList.map((news, index) => {
        return (
          <SingleNews
            key={uuid()}
            title={news.title}
            description={news.description}
            imageUrl={news.imageURL}
            index={index}
          />
        )
      })}
    </div>
  )
}

export default NewsList

NewsList.Layout = 'Main'
