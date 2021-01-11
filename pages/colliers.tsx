import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Colliers.module.scss'
import Product from '../components/product/Product'
import Image from 'next/image'

function colliers() {

  const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
        <>
        <img
          src="/necklace-presentation-photo.png"
          className={styles.imageBack} />
       
      <Logo productCategory={'collier'} undertitle={shortDescription} />
      <Product />
    </>
  )
}

export default colliers
