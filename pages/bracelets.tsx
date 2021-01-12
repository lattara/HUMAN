import React from 'react'
import Logo from '../components/logo/Logo'
import Product from '../components/product/Product'
import styles from '../styles/Bracelet.module.scss'
import { Row, Col } from 'react-bootstrap';

function bracelets() {
    const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    return (
        <>
        <Logo productCategory={'bracelet'} undertitle={shortDescription}/>
        <img className={styles.presentationImage}
            src="/necklace-presentation-photo.png"
            alt="Necklace presentation photo"
             /> 
        <Product /> 
      </>
        
    )
}

export default bracelets
