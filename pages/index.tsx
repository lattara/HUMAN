import Head from 'next/head'
import Logo from '../components/logo/Logo'

import styles from '../styles/Home.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navigation/nav'
import React from 'react';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Human bijoux</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"/>
       <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@500&family=Nanum+Gothic+Coding&display=swap" rel="stylesheet"></link>
      </Head>
      <main>
      
        <Logo isMain={true}></Logo>
        <Nav/>

      <div>
      
      </div>
      </main>
    </div>
  )
}
