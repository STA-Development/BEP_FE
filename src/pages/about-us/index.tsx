import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalName } from '@allTypes/modals'
import { Roles } from '@allTypes/reduxTypes/usersStateTypes'
import { AboutUsItem } from '@components/AboutUs/AboutUsList'
import AboutUsMember from '@components/AboutUs/AddMember/AboutUsMember'
import { ChangeMemberInfo } from '@components/AboutUs/ChangeMemberInfo'
import { DeleteChangeMenu } from '@components/Admin/DeleteChangeSettignsMenu'
import { Container } from '@components/Container'
import { TeamIcon } from '@components/Icons'
import { Introduction } from '@components/Introduction'
import { Translation } from '@constants/translations'
import { dispatch, useAppSelector } from '@redux/hooks'
import { aboutUsMiddleware, aboutUsSelector } from '@redux/slices/aboutUs'
import { usersSelector } from '@redux/slices/users'
import { viewsMiddleware } from '@redux/slices/views'
import { Button } from '@uiComponents/Button'
import { Loading } from '@uiComponents/Loading'

const AboutUs = () => {
  const [showPersonForm, setShowPersonForm] = useState<boolean>(false)

  const {
    aboutUsList,
    isTeamMemberSubmitSuccess,
    isAboutUsLoading,
    isChangeTeamMemberSubmitSuccess,
  } = useAppSelector(aboutUsSelector.aboutUs)
  const { role } = useAppSelector(usersSelector.user)

  const loading = isAboutUsLoading || isTeamMemberSubmitSuccess || isChangeTeamMemberSubmitSuccess

  const [t] = useTranslation()
  const [changeMember, setChangeMember] = useState<string | null>(null)

  const onDeleteTeamMemberModal = useCallback((uuid: string) => {
    dispatch(
      viewsMiddleware.openModal({
        name: ModalName.DeleteTeamMember,
        props: {
          id: uuid,
        },
      })
    )
  }, [])

  useEffect(() => {
    dispatch(aboutUsMiddleware.getAboutUsList())
  }, [])

  useEffect(() => {
    if (isChangeTeamMemberSubmitSuccess) {
      dispatch(aboutUsMiddleware.resetChangeTeamMemberSubmitSuccess())
      setChangeMember(null)
    }
    //   eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangeTeamMemberSubmitSuccess])

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
          <div className="mb-10 flex w-full xl:justify-end">
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
            {aboutUsList?.map((member, index) => (
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
                      <DeleteChangeMenu
                        onDeleteItem={onDeleteTeamMemberModal}
                        changeAction={setChangeMember}
                        uuid={member.uuid}
                        deleteButtonTitle={
                          t(Translation.PAGE_ABOUT_US_TEAM_MEMBER_MENU_DELETE) as string
                        }
                        changeButtonTitle={
                          t(Translation.PAGE_ABOUT_US_TEAM_MEMBER_MENU_EDIT) as string
                        }
                      />
                    )}
                  </div>
                ) : null}
                {changeMember === member.uuid ? (
                  <ChangeMemberInfo changeMember={changeMember} />
                ) : (
                  <AboutUsItem
                    member={member}
                    index={index}
                  />
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
