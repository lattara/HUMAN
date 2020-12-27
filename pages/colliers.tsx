import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Necklace.module.scss'
import Product from '../components/product/Product'

function colliers() {
  return (
    <div className={styles.container}>
      <Logo undertitle={'collier'} />
      <Product />
    </div>
  )
}

export default colliers
