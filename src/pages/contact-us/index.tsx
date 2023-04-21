import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@components/Container'
import { LocationIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { Translation } from '@constants/translations'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'

const ContactUs = () => {
  const [t] = useTranslation()

  return (
    <Container className="pb-30">
      <PageHeader
        title={t(Translation.PAGE_CONTACT_US_MAIN_TITLE)}
        paths={['Home', 'Contact Us']}
      />
      <div className="mb-10 grid grid-cols-1 gap-10 divide-gray-thin pt-10 xl:mb-20 xl:grid-cols-2 xl:gap-0 xl:divide-x">
        <div className="xl:pr-20">
          <form action="">
            <div className="mb-5 flex flex-col">
              <Input
                type="text"
                id="name"
                label={`${t(Translation.PAGE_CONTACT_US_FORM_FULL_NAME)}`}
                required
              />
            </div>
            <div className="columns-1 gap-5 xl:columns-2">
              <div className="mb-5 flex flex-col">
                <Input
                  type="email"
                  id="email"
                  label={`${t(Translation.PAGE_CONTACT_US_FORM_EMAIL)}`}
                  required
                />
              </div>
              <div className="mb-5 flex flex-col">
                <Input
                  type="text"
                  id="telephone"
                  label={`${t(Translation.PAGE_CONTACT_US_FORM_TELEPHONE)}`}
                  required
                />
              </div>
            </div>
            <div className="mb-10 flex flex-col">
              <Input
                label={`${t(Translation.PAGE_CONTACT_US_FORM_MESSAGE)}`}
                id="message"
                rows={5}
                required
              />
            </div>
            <Button size="fl">{t(Translation.PAGE_CONTACT_US_FORM_ACTIONS_SUBMIT)}</Button>
          </form>
        </div>
        <div className="flex flex-col xl:mb-0 xl:pl-20">
          <h3 className="mb-2.5 text-lg font-medium xl:hidden">
            {t(Translation.PAGE_CONTACT_US_MAP_TITLE)}
          </h3>
          <div className="mb-5 flex items-center">
            <LocationIcon />
            <p className="ml-2.5 text-sm text-black-light xl:ml-4">Abovyan st. 29, Yerevan</p>
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
              {t(Translation.PAGE_CONTACT_US_MAP_ACTIONS_GOOGLE_MAPS)}
            </Button>
          </div>
        </div>
      </div>
      <div className="grid w-1/2 grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <h3 className="mb-2.5 text-lg font-medium xl:font-normal">
            {t(Translation.PAGE_CONTACT_US_EMAIL)}
          </h3>
          <p className="text-sm xl:text-base">example@email.com</p>
        </div>
        <div>
          <h3 className="mb-2.5 text-lg font-medium xl:font-normal">
            {t(Translation.PAGE_CONTACT_US_PHONE_NUMBER)}
          </h3>
          <p className="text-sm xl:text-base">+374 387 347 347</p>
        </div>
      </div>
    </Container>
  )
}

export default ContactUs
