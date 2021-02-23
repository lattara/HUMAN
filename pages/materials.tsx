import React from 'react'
import { getProducts } from '../hooks/productHook'

function materials() {
    const res = getProducts()
    console.log(res)
    return (
        <div>
            materials
        </div>
    )
}

export default materials
