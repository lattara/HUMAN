import React from 'react'
import Layout from '../components/layout/Layout'
import Logo from '../components/logo/Logo'
import Nav from '../components/navigation/Nav'
import styles from '../styles/Home.module.scss'

function colliers() {
    return (
      <>
      <Logo undertitle={'collier'}/>
      <div className={`${styles.dividerTop} col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12`}></div>
      </>
    )
}

export default colliers
