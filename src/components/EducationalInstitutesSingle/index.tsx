import React from 'react'
import { LocationIcon } from '@components/Icons'
import { Clock } from '@components/Icons/Clock'
import { MailIcon } from '@components/Icons/MailIcon'
import { PeopleQueue } from '@components/Icons/PeopleQueue'
import { PersonAccount } from '@components/Icons/PersonAccount'
import { PhoneIcon } from '@components/Icons/PhoneIcon'
import { Toolbox } from '@components/Icons/Toolbox'
import { Images, IndividualCarousel } from '@components/IndividualCarousel'
import { Maps } from '@components/Maps'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@uiComponents/Button'

interface IIndividualPageProps {
  description: string
}

const images: Images[] = [
  { src: '/image1.jpg', id: 1 },
  { src: '/default.png', id: 2 },
  { src: '/image1.jpg', id: 3 },
]

export const EducationalInstitutesSingle = ({ description }: IIndividualPageProps) => (
  <div className="flex w-full flex-col items-center justify-center">
    <div className="mb-8 flex w-full flex-row">
      <PageHeader
        title="Institute of Yerevan"
        paths={['Home', 'Educational Institutes', 'Institute of Yerevan']}
      />
    </div>

    <div className="flex w-full flex-col xl:flex-row">
      <div className="flex h-80 w-full items-center justify-center overflow-hidden bg-white xl:h-auto xl:w-1/2">
        <IndividualCarousel images={images} />
      </div>
      <div className="flex w-full flex-col flex-wrap items-start xl:w-1/2 xl:items-center">
        <div className="flex w-full flex-col flex-wrap xl:w-3/4">
          <p className="w-full py-2 pt-8 text-lg">Institute Of Yerevan</p>
          <p className="hidden w-full text-sm xl:flex">
            Lorem ipsum dolor sit amet consectetur. Ac sed consequat mauris egestas consequat ac et.
            Mauris egestas consequat.
          </p>
          <p className="flex w-full text-sm xl:hidden">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="flex w-full flex-row py-4 xl:hidden">
          <Button size="lg">Send Email</Button>
        </div>
        <div className="flex w-full flex-col flex-wrap py-4 xl:w-3/4 xl:flex-row">
          <div className="flex w-full flex-col flex-wrap xl:w-1/2">
            <p className="w-full py-2 text-lg font-medium xl:text-sm">Info & Requirements:</p>
            <div className="flex w-full flex-row items-center py-2">
              <PersonAccount /> <p className="px-2 text-lg xl:text-sm">Lorem ipsum</p>
            </div>
            <div className="flex w-full flex-row items-center py-2">
              <PeopleQueue /> <p className="px-2 text-lg xl:text-sm">Lorem ipsum</p>
            </div>
            <div className="flex w-full flex-row items-center py-2 ">
              <Toolbox /> <p className="px-2 text-lg xl:text-sm">Lorem ipsum</p>
            </div>
            <div className="flex w-full flex-row items-center py-2">
              <Clock /> <p className="px-2 text-lg xl:text-sm">Lorem ipsum</p>
            </div>
          </div>
          <div className="flex w-full flex-col flex-wrap xl:w-1/2">
            <p className="w-full py-2 text-lg font-medium xl:text-sm">Info & Requirements:</p>
            <div className="flex w-full flex-row items-center py-2">
              <PhoneIcon /> <p className="px-2 text-lg xl:text-sm">Lorem ipsum</p>
            </div>
            <div className="flex w-full flex-row items-center py-2">
              <PhoneIcon /> <p className="px-2 text-lg xl:text-sm">Lorem ipsum</p>
            </div>
            <div className="flex w-full flex-row items-center py-2">
              <MailIcon /> <p className="px-2 text-lg xl:text-sm">Lorem ipsum</p>
            </div>
            <div className="flex w-full flex-row items-center py-2">
              <LocationIcon /> <p className="px-2 text-lg xl:text-sm">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 flex w-full flex-col flex-wrap">
      <p className="w-full py-4 text-lg font-normal">Description: </p>
      <p className="w-full text-[14px]">{description}</p>
    </div>
    <div className="flex w-full flex-col py-8">
      <p className="w-full py-2 text-lg">Where to find us:</p>
      <div className="flex w-full flex-row py-2">
        <LocationIcon />
        <p className="px-2">Abovyan st. 29, Yerevan</p>
      </div>
    </div>
    <div className="flex w-full flex-col flex-wrap py-2">
      <Maps
        mapURL="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.9665400549616!2d44.520139515500986!3d40.1875580793924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce08fcfdca5%3A0x9a08bbe9e33d7868!2s29%20Abovyan%20poxoc%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1681153295985!5m2!1sru!2sam"
        height={500}
      />
      <div className="flex w-full flex-row py-4 xl:w-1/3">
        <Button
          size="lg"
          variant="outlined"
        >
          <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.9665400549616!2d44.520139515500986!3d40.1875580793924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce08fcfdca5%3A0x9a08bbe9e33d7868!2s29%20Abovyan%20poxoc%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1681153295985!5m2!1sru!2sam">
            Open Google Maps
          </a>
        </Button>
      </div>
    </div>
  </div>
)

export default EducationalInstitutesSingle
