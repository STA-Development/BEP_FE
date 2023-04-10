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
    <div className="mb-10 mb-10 grid grid-cols-1 gap-10 py-10 xl:mb-0 xl:mb-20 xl:grid-cols-2 xl:gap-0 xl:divide-x">
      <div className="xl:pr-20 ">
        <form action="">
          <div className="mb-5 flex flex-col">
            <Input
              type="text"
              id="name"
              htmlFor="name"
              label="Full Name:"
            />
          </div>
          <div className="columns-2 gap-5">
            <div className="mb-5 flex flex-col">
              <Input
                type="email"
                id="email"
                htmlFor="email"
                label="E-mail:"
              />
            </div>
            <div className="mb-5 flex flex-col">
              <Input
                type="text"
                id="telephone"
                htmlFor="telephone"
                label="Telephone:"
              />
            </div>
          </div>
          <div className="mb-10 flex flex-col">
            <label
              htmlFor="message"
              className="pb-2.5 text-sm text-black-light"
            >
              Message*
            </label>
            <textarea
              id="message"
              className="resize-none rounded border border-gray-light px-5 py-2.5 outline-0"
              rows={5}
            />
          </div>
          <Button size="fl">Submit</Button>
        </form>
      </div>
      <div className="mb-30 flex flex-col xl:mb-0 xl:pl-20">
        <h3 className="mb-2.5 text-lg font-medium xl:hidden">Where to find us:</h3>
        <div className="mb-5 flex items-center">
          <LocationIcon />
          <p className="ml-2.5 text-sm text-black-light xl:ml-4">Abovyan st. 29, Yerevan</p>
        </div>
        <div className="mb-5 h-full max-h-[400px] xl:mb-10 xl:max-h-[332px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25500.34655662076!2d44.55500355758102!3d40.173801582606615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2dab8fc8b5b%3A0x3d1479ae87da526a!2z0JXRgNC10LLQsNC9!5e0!3m2!1sru!2sam!4v1681134335648!5m2!1sru!2sam"
            style={{
              borderRadius: '10px',
              width: '100%',
              height: '100%',
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
