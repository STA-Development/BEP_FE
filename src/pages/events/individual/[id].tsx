import React from 'react'
import { Container } from '@components/Container'
import { PageHeader } from '@components/PageHeader'
import Image from 'next/image'

const IndividualEventPage = () => {
  const item = {
    id: 2,
    title: 'Visit Of The Training Center Of The Chamber',
    info: 'Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse.Lorem ipsum dolor sit amet consectetur. Tincidunt nisi pretium congue tristique egestas tincidunt. Morbi lobortis purus risus turpis tempus eu. Montes sit mattis urna faucibus habitasse. Morbi lobortis purus risus turpis.',
    time: '31.01.2022',
    image: '/image1.jpg',
    isButtonVisible: false,
    date: '22.01.2022',
  }

  return (
    <Container className="pb-30">
      <PageHeader
        title="Events"
        description="Keep up with the following events"
        paths={['Home', 'Events']}
      />
      <div className="pt-5 xl:pt-10">
        <div
          key={item.id}
          className="mb-5rounded p-10 xl:mb-10 "
        >
          <div>
            <Image
              className="xl:float-right xl:ml-30 xl:mb-20"
              src={item.image}
              width={500}
              height={680}
              alt="picture"
            />
            <h2 className="text-xl text-black xl:mt-0 xl:text-2xl">{item.time}</h2>
            <p className="mt-5 text-lg text-black">{item.title}</p>
            <p className="mt-5 text-base text-black-light xl:mt-15">{item.info}</p>
          </div>
          <p className="mt-11 text-black-light">{item.date}</p>
        </div>
      </div>
    </Container>
  )
}

export default IndividualEventPage
