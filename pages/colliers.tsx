import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Colliers.module.scss'
import Product from '../components/product/Product'
import Image from 'next/image'

function colliers() {

  const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
    <div className={styles.container}>
      <div className={styles.featuredImage}>
        <img
          src="/yellow-background.jpg"
          className={styles.imageBack} />
        <img
          src="/presentation1.png"
          width={200} height={250}
          className={styles.imageFront}
        />
      </div>
      <Logo secondTitle={'collier'} undertitle={shortDescription} />
      <Product />
    </div>
  )
}

export default colliers
