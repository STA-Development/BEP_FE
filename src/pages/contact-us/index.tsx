import React from 'react'
import { Container } from '@components/Container'
import { PageHeader } from '@components/PageHeader'
import { Button } from '@components/UI/Button'

const ContactUs = () => (
  <Container>
    <div className="grid grid-cols-1 divide-y">
      <PageHeader title="Contact Us" />
      <div className="grid grid-cols-2 divide-x py-10">
        <div className="pr-20">
          <form action="">
            <div className="mb-5 flex flex-col">
              <label
                htmlFor="name"
                className="pb-2.5 text-sm text-black-light"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                className="rounded border border-gray-light py-2.5 px-5 outline-0"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="email"
                  className="pb-2.5 text-sm text-black-light"
                >
                  E-mail:
                </label>
                <input
                  type="text"
                  id="email"
                  className="rounded border border-gray-light py-2.5 px-5 outline-0"
                />
              </div>
              <div className="mb-5 flex flex-col">
                <label
                  htmlFor="telephone"
                  className="pb-2.5 text-sm text-black-light"
                >
                  Telephone:
                </label>
                <input
                  type="text"
                  id="telephone"
                  className="rounded border border-gray-light py-2.5 px-5 outline-0"
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
                className="resize-none rounded border border-gray-light py-2.5 px-5 outline-0"
                rows={10}
              />
            </div>
            <Button size="fl">Submit</Button>
          </form>
        </div>
        <div className="pl-20" />
      </div>
    </div>
  </Container>
)

export default ContactUs
