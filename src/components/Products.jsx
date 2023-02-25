import React from 'react'
import Product from './Product'
import { ApiTopProducts } from '../apifolder/TopProductsApi'
const Products = () => {
  return (
    <div className='flex flex-1 flex-wrap p-5 items-center justify-center'>
        {ApiTopProducts.map((product, index) => (
            <Product item={product} key={index}/>
        ))}
    </div>
  )
}

export default Products