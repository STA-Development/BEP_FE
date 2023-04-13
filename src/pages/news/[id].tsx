import React from 'react'
import { Container } from '@components/Container'
import { PageHeader } from '@components/PageHeader'
import Image from 'next/image'

const IndividualNewsPage = () => {
  const item = {
    id: 2,
    title: 'Visit Of The Training Center Of The Chamber Of Craftsmen (Handwerkskammer Zu Leipzig) ',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis.',
    image: '/image1.jpg',
    isButtonVisible: false,
    date: '22.01.2022',
  }

  return (
    <Container className="pb-30">
      <PageHeader
        title="News"
        description="The Latest News From our Foundation"
        paths={['Home', 'Events']}
      />
      <div className="pt-5 xl:pt-10">
        <div>
          <Image
            className="xl:float-right xl:ml-30 xl:mb-20"
            src={item.image}
            width={500}
            height={680}
            alt="picture"
          />
          <p className="mt-5 text-lg text-black">{item.title}</p>
          <p className="mt-5 text-base text-black-light xl:mt-15">{item.info}</p>
        </div>
        <p className="mt-10 text-black-light xl:mt-20">{item.date}</p>
      </div>
    </Container>
  )
}

export default IndividualNewsPage
