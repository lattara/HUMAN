import React from 'react'
import Layout from '../components/layout/Layout'
import { withRouter } from 'next/router'
import '../styles/globals.scss'
import DashLayout from '../components/layout/DashLayout';
import Container from 'react-bootstrap/Container'

function MyApp({ Component, pageProps, router }) {
  const loggedUser = { name: 'Name', role: 'admin' }

  if (router.pathname.startsWith('/dashboard/') && loggedUser.role === 'admin') {
    return (
      <Container fluid style={{ width: "100vw", height:"89vh", padding: "0px", overflow:"scroll"}}>
        <DashLayout>
          <Component {...pageProps} />
        </DashLayout>
      </Container>
    )
  }
  else {
    return (
      <>
        <Container fluid style={{ maxWidth: "100vw", height:"100vh", padding: "0px", overflow:"hidden"}}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </>
    )
  }

}

export default withRouter(MyApp)
