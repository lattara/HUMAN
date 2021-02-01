import React from 'react'
import { Col } from 'react-bootstrap'
import Logo from '../components/logo/Logo'
import Products from '../components/product/Products'
import styles from '../styles/Bracelet.module.scss'

function bracelets() {
    const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    return (
        <>
        <Logo productCategory={'bracelet'} imageLink={"/necklace-presentation-photo.png"} undertitle={shortDescription}/>
        <Col className={styles.productsContainer}><Products /> </Col>
      </>
        
    )
}

export default bracelets
