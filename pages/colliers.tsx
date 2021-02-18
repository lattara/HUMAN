import React from 'react'
import Logo from '../components/logo/Logo'
import Products from '../components/product/Products'
import { NextPage, GetStaticProps } from "next"
import fetch from "node-fetch"
import {productModel} from '../models/Product.model'


export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`http://localhost:5000/api/products/necklaces`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {data}, 
  }
  
}

const colliers: NextPage<{ProductModel}> = (props) => {
  const shortDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    <>
      <Logo productCategory={'collier'} imageLink={"/necklace-presentation-photo.png"} undertitle={shortDescription} />
      <Products {...props}/>
    </>
  )
}

export default colliers
