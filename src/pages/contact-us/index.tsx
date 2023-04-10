import React from 'react'
import { Container } from '@components/Container'
import { LocationIcon } from '@components/Icons'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@uiComponents/Button'
import { Input } from '@uiComponents/Input'

const ContactUs = () => (
  <Container className="pb-30">
    <PageHeader
      title="Contact Us"
      paths={['Home', 'Contact Us']}
    />
    <div className="grid grid-cols-1 gap-10 pt-10 xl:grid-cols-2 xl:gap-0 xl:divide-x">
      <div className="xl:pr-20">
        <form action="">
          <div className="mb-5 flex flex-col">
            <Input
              type="text"
              id="name"
              label="Full Name"
              required
            />
          </div>
          <div className="columns-2 gap-5">
            <div className="mb-5 flex flex-col">
              <Input
                type="email"
                id="email"
                label="E-mail"
                required
              />
            </div>
            <div className="mb-5 flex flex-col">
              <Input
                type="text"
                id="telephone"
                label="Telephone"
                required
              />
            </div>
          </div>
          <div className="mb-10 flex flex-col">
            <Input
              label="Message"
              id="message"
              rows={5}
              required
            />
          </div>
          <Button size="fl">Submit</Button>
        </form>
      </div>
      <div className="mb-10 flex flex-col xl:mb-0 xl:pl-20">
        <h3 className="mb-2.5 text-lg font-medium xl:hidden">Where to find us:</h3>
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
            Open Google Maps
          </Button>
        </div>
      </div>
    </div>
    <div className="grid w-1/2 grid-cols-1 gap-5 xl:grid-cols-2">
      <div>
        <h3 className="mb-2.5 text-lg font-medium xl:font-normal">E-mail:</h3>
        <p className="text-sm xl:text-base">example@email.com</p>
      </div>
      <div>
        <h3 className="mb-2.5 text-lg font-medium xl:font-normal">Phone Number:</h3>
        <p className="text-sm xl:text-base">+374 387 347 347</p>
      </div>
    </div>
  </Container>
)

export default ContactUs
