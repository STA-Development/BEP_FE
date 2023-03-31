import React from 'react'
import { Container } from '@components/Container'
import { TeamIcon } from '@components/Icons'
import { Introduction } from '@components/Introduction'
import Image from 'next/image'

// TODO remove after API integration
const team = [{ id: Math.random() }, { id: Math.random() }]

const AboutUs = () => (
  <>
    <Introduction
      img={<TeamIcon />}
      title="Who are we?"
      desc="Lorem ipsum dolor sit amet consectetur. Non vel nisl iaculis faucibus ornare vitae. Lectus quam faucibus
          ultrices pellentesque vitae sem vestibulum potenti id. Enim tellus sagittis diam nisl mattis. Lorem ipsum
          dolor sit amet consectetur. Non vel nisl iaculis faucibus ornare vitae. Lectus quam faucibus ultrices
          pellentesque vitae sem vestibulum potenti id. Enim tellus sagittis diam nisl mattis."
    />

    <Container color="secondary">
      <div className="mx-auto max-w-[760px] py-10 text-center text-white">
        <h2 className="mb-5 text-xl font-medium text-primary xl:font-normal">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className="text-base text-black-light">
          Lorem ipsum dolor sit amet consectetur. Non vel nisl iaculis faucibus ornare vitae. Lectus
          quam faucibus ultrices pellentesque vitae sem vestibulum potenti id. Enim tellus sagittis
          diam nisl mattis. Orci aenean rutrum nisi facilisis.
        </p>
      </div>
    </Container>

    <Container className="pt-30">
      <h2 className="mb-10 text-xl font-medium xl:hidden">Our team</h2>

      {team.map((member) => (
        <div
          className="group mb-30 flex flex-col xl:flex-row xl:px-30"
          key={member.id}
        >
          <div
            className="mb-10 mr-20 flex w-full flex-none justify-center group-odd:mr-0
              xl:w-[350px] xl:flex-row xl:flex-col xl:group-odd:order-last xl:group-odd:ml-20"
          >
            <Image
              src="/default.png"
              alt="img"
              width={350}
              height={400}
              className="xl:mb-5"
            />
            <p className="hidden text-base italic text-black-light group-odd:text-right xl:block xl:text-left">
              Mary Green - Founder of BEP
            </p>
          </div>

          <div>
            <h3 className="mb-2.5 text-xl font-medium text-primary xl:text-2xl">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="mb-10 text-base text-black-light">
              Lorem ipsum dolor sit amet consectetur. Non vel nisl iaculis faucibus ornare vitae.
              Lectus quam faucibus ultrices pellentesque vitae sem vestibulum potenti id. Enim
              tellus sagittis diam nisl mattis. Orci aenean rutrum nisi facilisis. Maecenas erat vel
              rhoncus tortor sodales.
            </p>

            <p className="block text-base italic text-black-light xl:hidden">
              Mary Green - Founder of BEP
            </p>
          </div>
        </div>
      ))}
    </Container>
  </>
)

export default AboutUs
