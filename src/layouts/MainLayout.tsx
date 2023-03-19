import { PropsWithChildren } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header loggedIn={true} />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
