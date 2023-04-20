import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactUsSendMessage from '@components/ContactUsSendMessage'
import { Container } from '@components/Container'
import { LocationIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'

const ContactUs = () => {
  const [t] = useTranslation()

  return (
    <Container className="pb-30">
      <PageHeader
        title={`${t(Translation.CONTACT_US)}`}
        paths={[`${t(Translation.NAVBAR_HOME)}`, `${t(Translation.CONTACT_US)}`]}
      />
      <div className="mb-10 grid grid-cols-1 gap-10 divide-gray-thin pt-10 xl:mb-20 xl:grid-cols-2 xl:gap-0 xl:divide-x">
        <ContactUsSendMessage />
        <div className="flex flex-col xl:mb-0 xl:pl-20">
          <h3 className="mb-2.5 text-lg font-medium xl:hidden">
            {t(Translation.CONTACT_US_FIND_US)}:
          </h3>
          <div className="mb-5 flex items-center">
            <LocationIcon />
            <p className="ml-2.5 text-sm text-black-light xl:ml-4">
              {t(Translation.CONTACT_US_ADDRESS)}
            </p>
          </div>
          <div className="mb-5 h-full xl:mb-12">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.966540054967!2d44.520139515845585!3d40.18755807939243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce08fcfdca5%3A0x9a08bbe9e33d7868!2s29%20Abovyan%20poxoc%2C%20Yerevan!5e0!3m2!1sru!2sam!4v1681140090545!5m2!1sru!2sam"
              style={{
                width: '100%',
                height: '332px',
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="w-full xl:w-64 xl:flex-initial">
            <Button
              variant="outlined"
              size="fl"
            >
              {t(Translation.CONTACT_US_GOOGLE_BUTTON)}
            </Button>
          </div>
        </div>
      </div>
      <div className="grid w-1/2 grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <h3 className="mb-2.5 text-lg font-medium xl:font-normal">
            {t(Translation.CONTACT_US_MAIL)}:
          </h3>
          <p className="text-sm xl:text-base">example@email.com</p>
        </div>
        <div>
          <h3 className="mb-2.5 text-lg font-medium xl:font-normal">
            {t(Translation.CONTACT_US_PHONE)}:
          </h3>
          <p className="text-sm xl:text-base">+374 387 347 347</p>
        </div>
      </div>
    </Container>
  )
}

export default ContactUs
