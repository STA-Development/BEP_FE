import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AboutUsList } from '@components/AboutUsList'
import { Container } from '@components/Container'
import { TeamIcon } from '@components/Icons'
import { Introduction } from '@components/Introduction'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { aboutUsMiddleware, aboutUsSelector } from '@redux/slices/aboutUs'

const AboutUs = () => {
  const [t] = useTranslation()
  const [changeMember, setChangeMember] = useState<string | null>(null)
  const { aboutUsList } = useAppSelector(aboutUsSelector.aboutUs)

  useEffect(() => {
    dispatch(aboutUsMiddleware.getAboutUsList())
  }, [])

  return (
    <>
      <Introduction
        img={<TeamIcon />}
        title={t(Translation.PAGE_ABOUT_US_TITLE)}
        desc={t(Translation.PAGE_ABOUT_US_DESCRIPTION)}
      />

      <Container color="secondary">
        <div className="mx-auto max-w-[760px] py-10 text-center text-white">
          <h2 className="mb-5 text-xl font-medium text-primary xl:font-normal">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="text-base text-black-light">
            Lorem ipsum dolor sit amet consectetur. Non vel nisl iaculis faucibus ornare vitae.
            Lectus quam faucibus ultrices pellentesque vitae sem vestibulum potenti id. Enim tellus
            sagittis diam nisl mattis. Orci aenean rutrum nisi facilisis.
          </p>
        </div>
      </Container>

      <Container className="pt-30">
        <h2 className="mb-10 text-xl font-medium xl:hidden">Our team</h2>
        {aboutUsList.map((member) => (
          <div>
            {changeMember === member.uuid ? (
              <div>Form</div>
            ) : (
              <AboutUsList
                setChangeMember={setChangeMember}
                member={member}
              />
            )}
          </div>
        ))}
      </Container>
    </>
  )
}

export default AboutUs
