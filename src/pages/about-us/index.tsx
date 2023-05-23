import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import AboutUsAddMember from '@components/AboutUsAddMember/AboutUsAddMember'
import { Container } from '@components/Container'
import { TeamIcon } from '@components/Icons'
import { Introduction } from '@components/Introduction'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { aboutUsMiddleware, aboutUsSelector } from '@redux/slices/aboutUs'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'
import Image from 'next/image'

const AboutUs = () => {
  const [showPersonForm, setShowPersonForm] = useState<boolean>(false)

  const { aboutUsList, isTeamMemberSubmitSuccess, isAboutUsLoading } = useAppSelector(
    aboutUsSelector.aboutUs
  )
  const { role } = useAppSelector(usersSelector.user)

  const loading = isAboutUsLoading || isTeamMemberSubmitSuccess

  const [t] = useTranslation()

  useEffect(() => {
    dispatch(aboutUsMiddleware.getAboutUsList())
  }, [])

  useEffect(() => {
    if (isTeamMemberSubmitSuccess) {
      dispatch(aboutUsMiddleware.resetCreateTeamMemberSubmitSuccess())
      setShowPersonForm(false)
    }
  }, [isTeamMemberSubmitSuccess])

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
        {role === Roles.Admin ? (
          <div className="mb-10 flex w-full justify-end">
            {showPersonForm ? (
              <Button onClick={() => setShowPersonForm(false)}>
                {t(Translation.PAGE_ABOUT_US_CLOSE_FORM)}
              </Button>
            ) : (
              <Button onClick={() => setShowPersonForm(true)}>
                {t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER)}
              </Button>
            )}
          </div>
        ) : null}
        {showPersonForm ? <AboutUsAddMember /> : null}
        {loading ? (
          <Loading />
        ) : (
          <div>
            {aboutUsList.map((member) => (
              <div
                className="group mb-30 flex flex-col xl:flex-row xl:px-30"
                key={member.uuid}
              >
                <div
                  className="mb-10 mr-20 flex w-full flex-none justify-center group-odd:mr-0
              xl:w-[350px] xl:flex-row xl:flex-col xl:group-odd:order-last xl:group-odd:ml-20"
                >
                  <Image
                    src={member.imageURL}
                    loader={() => member.imageURL ?? ''}
                    width={350}
                    height={400}
                    className="max-h-[450px] max-w-[450px] xl:mb-5"
                    alt="picture"
                  />
                  <p className="hidden text-base italic text-black-light group-odd:text-right xl:block xl:text-left">
                    {member.imageDescription}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2.5 text-xl font-medium text-primary xl:text-2xl">
                    {member.header}
                  </h3>
                  <p className="mb-10 text-base text-black-light">{member.paragraph}</p>

                  <p className="block text-base italic text-black-light xl:hidden">
                    {member.imageDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  )
}

export default AboutUs
