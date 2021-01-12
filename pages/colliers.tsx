import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Colliers.module.scss'
import Product from '../components/product/Product'
import Image from 'next/image'
import { Col } from 'react-bootstrap';

function colliers() {
  const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
        <>
      <Logo productCategory={'collier'} undertitle={shortDescription}/>
      <img className={styles.presentationImage}
          src="/necklace-presentation-photo.png"
          alt="Necklace presentation photo"
           /> 
      <Product /> 
    </>
  )
}

export default colliers
