import React from 'react'
import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { LeftIcon } from '@components/Icons'
import Link from 'next/link'

const Resend = () => (
  <Container className="pb-44">
    <div className="justify-center pt-5 xl:flex xl:flex-col xl:items-center xl:pt-10">
      <div className="flex w-full justify-between">
        <Link href="/">
          <Button
            variant="text"
            leftIcon={<LeftIcon />}
          >
            Go back
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outlined">Log In</Button>
        </Link>
      </div>
      <div className="mt-[60] xl:mt-10">
        <h1 className="text-xl text-black">The link was sent to your email</h1>
        <div className="mt-5 flex items-center border-b border-gray-thin pb-5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-5"
          >
            <path
              d="M11.0044 0.203858C11.1601 0.256851 11.3123 0.319881 11.4599 0.392545L13.2357 1.26683C13.7176 1.50411 14.2824 1.50411 14.7643 1.26683L16.5402 0.392545C18.4263 -0.536159 20.7084 0.240129 21.6371 2.12641L21.7388 2.35113L21.8257 2.58196L22.4632 4.45581C22.6363 4.96438 23.0357 5.36377 23.5441 5.53677L25.418 6.17421C27.4085 6.85132 28.4732 9.01386 27.7962 11.0044C27.7431 11.1601 27.6801 11.3123 27.6075 11.4599L26.7331 13.2357C26.4958 13.7176 26.4958 14.2824 26.7331 14.7643L27.6075 16.5402C28.5362 18.4263 27.7599 20.7084 25.8736 21.6371C25.726 21.7097 25.5739 21.7729 25.418 21.8257L23.5441 22.4632C23.0357 22.6363 22.6363 23.0357 22.4632 23.5441L21.8257 25.418C21.1487 27.4085 18.9862 28.4732 16.9956 27.7962C16.8399 27.7431 16.6877 27.6801 16.5402 27.6075L14.7643 26.7331C14.2824 26.4958 13.7176 26.4958 13.2357 26.7331L11.4599 27.6075C9.57361 28.5362 7.2916 27.7599 6.36289 25.8736C6.29021 25.726 6.22718 25.5739 6.17421 25.418L5.53677 23.5441C5.36377 23.0357 4.96438 22.6363 4.45581 22.4632L2.58196 21.8257C0.591448 21.1487 -0.473254 18.9862 0.203858 16.9956C0.256851 16.8399 0.319881 16.6877 0.392545 16.5402L1.26683 14.7643C1.50411 14.2824 1.50411 13.7176 1.26683 13.2357L0.392545 11.4599C-0.536159 9.57361 0.240129 7.2916 2.12641 6.36289C2.27403 6.29021 2.42619 6.22718 2.58196 6.17421L4.45581 5.53677C4.96438 5.36377 5.36377 4.96438 5.53677 4.45581L6.17421 2.58196C6.85132 0.591448 9.01386 -0.473254 11.0044 0.203858ZM18.8033 9.80498L11.3011 17.3071L8.56805 14.0276C8.20096 13.5869 7.54627 13.5274 7.10576 13.8945C6.66525 14.2617 6.60573 14.9163 6.97282 15.3568L10.4337 19.5099C10.8245 19.9789 11.5338 20.0111 11.9654 19.5794L20.2715 11.2733C20.677 10.8678 20.677 10.2104 20.2715 9.80498C19.8661 9.39951 19.2088 9.39951 18.8033 9.80498Z"
              fill="#2FB32C"
            />
          </svg>
          <p className="text-base text-black-light">
            Check your inbox and click on the link for password recovery
          </p>
        </div>
        <div className="mt-5">
          <p className="text-base text-black-light">Didn’t get the password? Click “Resend”</p>
          <Button className="mt-5 w-full">Resend Email</Button>
        </div>
      </div>
    </div>
  </Container>
)

export default Resend
