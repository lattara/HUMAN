import React from 'react'
import Logo from '../components/logo/Logo'
import styles from '../styles/Colliers.module.scss'
import Products from '../components/product/Products'
import Image from 'next/image'
import { Col } from 'react-bootstrap';

function colliers() {
  const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

  return (
      <>
        <Logo productCategory={'collier'} imageLink={"/necklace-presentation-photo.png"} undertitle={shortDescription}/>
        <Col className={styles.productsContainer}><Products /> </Col>
    </>
  )
}

export default colliers
