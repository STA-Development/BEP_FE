import React from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { Content } from '@components/Content'
import { RightIcon, TeamIcon } from '@components/Icons'
import Link from 'next/link'

const AboutUs = () => (
  <>
    <Container>
      <Content
        img={<TeamIcon />}
        title="What is BEP?"
        desc="“Business and Education Partnership” Foundation has been implementing the activities aimed
          at supporting the sustainable development and enhancement of the Armenian education system
          through introduction of innovative education models and mechanisms based on advanced
          international experience, as well as providing an assistance to the result-oriented
          process of vocational training."
        button={
          <Link href="/fill-the-form">
            <Button
              size="lg"
              rightIcon={<RightIcon />}
            >
              Fill the form
            </Button>
          </Link>
        }
      />
    </Container>

    <div className="bg-gray-thin py-10 px-5 text-center text-white">
      <div className="mx-auto max-w-screen-md">
        <h2 className="mb-5 text-xl text-primary">Lorem ipsum dolor sit amet consectetur.</h2>
        <p className="text-base text-black-light">
          Lorem ipsum dolor sit amet consectetur. Non vel nisl iaculis faucibus ornare vitae. Lectus
          quam faucibus ultrices pellentesque vitae sem vestibulum potenti id. Enim tellus sagittis
          diam nisl mattis. Orci aenean rutrum nisi facilisis.
        </p>
      </div>
    </div>
  </>
)

export default AboutUs
