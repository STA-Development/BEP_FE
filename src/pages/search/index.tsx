import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { LocationIcon } from '@components/Icons'
import { MailIcon } from '@components/Icons/MailIcon'
import { PhoneIcon } from '@components/Icons/PhoneIcon'
import SearchHeader from '@components/SearchHeader'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import Image from 'next/image'

const data = [
  {
    id: 1,
    title: 'Metal Factory “YMF”',
    details:
      'Lorem ipsum dolor sit amet consectetur. Ac sed consequat mauris egestas consequat ac et. Mauris egestas consequat.',
    image: '/image1.jpg',
    phoneOne: '+374 94 574 984',
    phoneTwo: '+374 94 574 984',
    mail: 'metal.factory@gmail.com',
    addres: 'Abovyan st. 29, Yerevan',
  },
  {
    id: 2,
    title: 'Metal Factory “YMF”',
    details:
      'Lorem ipsum dolor sit amet consectetur. Ac sed consequat mauris egestas consequat ac et. Mauris egestas consequat.',
    image: '/image1.jpg',
    phoneOne: '+374 94 574 984',
    phoneTwo: '+374 94 574 984',
    mail: 'metal.factory@gmail.com',
    addres: 'Abovyan st. 29, Yerevan',
  },
  {
    id: 3,
    title: 'Metal Factory “YMF”',
    details:
      'Lorem ipsum dolor sit amet consectetur. Ac sed consequat mauris egestas consequat ac et. Mauris egestas consequat.',
    image: '/image1.jpg',
    phoneOne: '+374 94 574 984',
    phoneTwo: '+374 94 574 984',
    mail: 'metal.factory@gmail.com',
    addres: 'Abovyan st. 29, Yerevan',
  },
  {
    id: 4,
    title: 'Metal Factory “YMF”',
    details:
      'Lorem ipsum dolor sit amet consectetur. Ac sed consequat mauris egestas consequat ac et. Mauris egestas consequat.',
    image: '/image1.jpg',
    phoneOne: '+374 94 574 984',
    phoneTwo: '+374 94 574 984',
    mail: 'metal.factory@gmail.com',
    addres: 'Abovyan st. 29, Yerevan',
  },
]

export const SearchPage = () => {
  const [t] = useTranslation()

  return (
    <Container className="pb-30">
      <SearchHeader />
      <div className="mt-20">
        {data.map((item) => (
          <div
            className="border-outline mb-5 flex flex-col rounded p-5 xl:mb-10
                xl:flex-row xl:items-start xl:justify-between xl:gap-10 xl:p-10"
          >
            <div className="xl:flex-initial">
              <Image
                src={item.image}
                width={310}
                height={240}
                alt="image"
                className="h-[240px] w-[310px]"
              />
            </div>
            <div className="mt-5 flex flex-col justify-between xl:mt-0 xl:flex-1 xl:flex-row">
              <div className="flex-1">
                <h2 className="text-lg xl:text-xl">{item.title}</h2>
                <p className="mt-2.5 w-full text-base text-black-light xl:mt-5 xl:max-w-[400px]">
                  {item.details}
                </p>
                <div className="mt-10">
                  <Button size="lg">
                    {t(Translation.PAGE_EDUCATIONAL_INSTITUTES_ACTIONS_DETAILS)}
                  </Button>
                </div>
              </div>
              <div className="hidden xl:flex xl:flex-1 xl:flex-col xl:items-start xl:justify-center">
                <div className="ml-2.5 flex items-center justify-start text-base text-black-light">
                  <PhoneIcon />
                  <p className="ml-2.5">{item.phoneOne}</p>
                </div>
                <div className="ml-2.5 mt-2.5 flex items-center justify-start text-base text-black-light">
                  <PhoneIcon />
                  <p className="ml-2.5">{item.phoneTwo}</p>
                </div>
                <div className="ml-2.5  mt-2.5 flex items-center items-center justify-start text-base text-black-light">
                  <MailIcon />
                  <p className="ml-2.5">{item.mail}</p>
                </div>
                <div className="ml-2.5 mt-2.5 flex items-center items-center justify-start text-base text-black-light">
                  <LocationIcon />
                  <p className="ml-2.5">{item.addres}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default SearchPage
