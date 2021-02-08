import React from 'react'
import Layout from '../components/layout/Layout'
import { withRouter } from 'next/router'
import '../styles/globals.scss'
import DashLayout from '../components/layout/DashLayout';

function MyApp({ Component, pageProps, router }) {
  const loggedUser = { name: 'Name', role: 'admin' }

  if (router.pathname.startsWith('/dashboard/') && loggedUser.role === 'admin') {
    return (
      <>
        <DashLayout>
          <Component {...pageProps} />
        </DashLayout>
      </>
    )
  }
  else {
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }

}

export default withRouter(MyApp)
