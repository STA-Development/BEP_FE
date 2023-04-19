/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { ModalsController } from '@components/ModalsController/ModalsController'
import RedirectionHandler from '@components/RedirectionHandler/RedirectionHandler'
import Layout, { Layouts } from '@layouts/index'
import { dispatch } from '@redux/hooks'
import { usersMiddleware } from '@redux/slices/users'
import store from '@redux/store'
import { NextComponentType, NextPageContext } from 'next'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

import '@utils/i18n'

import '@styles/globals.css'

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

interface IAppProps {
  Component: NextComponentType<NextPageContext, never> & {
    Layout: keyof typeof Layouts
  }
  pageProps: JSX.IntrinsicAttributes
}

const App = ({ Component, pageProps }: IAppProps) => {
  const HierarchicalLayout = Layouts[Component.Layout]

  useEffect(() => {
    const data = window.localStorage.getItem('language')

    if (data) {
      dispatch(usersMiddleware.changeLanguage(data))
    }
  }, [])

  return (
    <>
      <style
        jsx
        global
      >
        {`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}
      </style>
      <Head>
        <title>BEP Armenia</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <Provider store={store}>
          <RedirectionHandler />
          <Layout>
            {HierarchicalLayout ? (
              <HierarchicalLayout>
                <Component {...pageProps} />
              </HierarchicalLayout>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
          <ModalsController />
        </Provider>
      </main>
    </>
  )
}

export default App
