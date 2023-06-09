import React, { PropsWithChildren } from 'react'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

const MainLayout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default MainLayout
