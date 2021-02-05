import React from 'react'
import Logo from '../components/logo/Logo'
import Products from '../components/product/Products'

function bracelets() {
    const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    return (
        <>
        <Logo productCategory={'bracelet'} imageLink={"/necklace-presentation-photo.png"} undertitle={shortDescription}/>
        <Products />
      </>
        
    )
}

export default bracelets
