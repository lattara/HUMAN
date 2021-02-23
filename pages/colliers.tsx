import React from 'react'
import Logo from '../components/logo/Logo'
import Products from '../components/product/Products'
import { NextPage } from "next"
import { getProducts } from '../hooks/productHook'


const colliers: NextPage<{ProductModel}> = () => {
  const data = getProducts()
  const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    <>
      <Logo productCategory={'collier'} imageLink={"/necklace-presentation-photo.png"} undertitle={shortDescription} />
      <Products products={data}/> 
    </>
  )
}

export default colliers
