import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { AboutUsList } from '@components/AboutUs/AboutUsList'
import AboutUsMember from '@components/AboutUs/AddMember/AboutUsMember'
import { ChangeMemberInfo } from '@components/AboutUs/ChangeMemberInfo'
import { AboutUsMenu } from '@components/AboutUsMenu'
import { Container } from '@components/Container'
import { TeamIcon } from '@components/Icons'
import { Introduction } from '@components/Introduction'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { aboutUsMiddleware, aboutUsSelector } from '@redux/slices/aboutUs'
import { usersSelector } from '@redux/slices/users'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'

const AboutUs = () => {
  const [showPersonForm, setShowPersonForm] = useState<boolean>(false)

  const { aboutUsList, isTeamMemberSubmitSuccess, isAboutUsLoading } = useAppSelector(
    aboutUsSelector.aboutUs
  )
  const { role } = useAppSelector(usersSelector.user)

  const loading = isAboutUsLoading || isTeamMemberSubmitSuccess

  const [t] = useTranslation()
  const [changeMember, setChangeMember] = useState<string | null>(null)

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
            {t(Translation.PAGE_ABOUT_US_DESCRIPTION_HEADER)}
          </h2>
          <p className="text-base text-black-light">
            {t(Translation.PAGE_ABOUT_US_DESCRIPTION_PARAGRAPH)}
          </p>
        </div>
      </Container>

      <Container className="pt-30">
        <h2 className="mb-10 text-xl font-medium xl:hidden">Our team</h2>
        {role === Roles.Admin ? (
          <div className="mb-10 flex w-full justify-end">
            {showPersonForm ? (
              <Button
                size="bs"
                onClick={() => setShowPersonForm(false)}
              >
                {t(Translation.PAGE_ABOUT_US_CLOSE_FORM)}
              </Button>
            ) : (
              <Button
                size="bs"
                onClick={() => setShowPersonForm(true)}
              >
                {t(Translation.PAGE_ABOUT_US_ADD_TEAM_MEMBER)}
              </Button>
            )}
          </div>
        ) : null}
        {showPersonForm ? <AboutUsMember setShowPersonForm={setShowPersonForm} /> : null}
        {loading ? (
          <Loading />
        ) : (
          <div className="group mb-30 flex w-full flex-col xl:px-30">
            {aboutUsList?.map((member) => (
              <div>
                {role === Roles.Admin ? (
                  <div className="mb-5 flex w-full items-end justify-end">
                    {changeMember === member.uuid ? (
                      <Button
                        size="bs"
                        variant="outlined"
                        onClick={() => setChangeMember(null)}
                      >
                        {t(Translation.PAGE_ABOUT_US_CLOSE_FORM)}
                      </Button>
                    ) : (
                      <AboutUsMenu
                        setChangeMember={setChangeMember}
                        uuid={member.uuid}
                      />
                    )}
                  </div>
                ) : null}
                {changeMember === member.uuid ? (
                  <ChangeMemberInfo changeMember={changeMember} />
                ) : (
                  <AboutUsList member={member} />
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  )
}

export default AboutUs
