import React from 'react'
import Product from './Product'

const FilterList = ({productsList}) => {
  return (
    <div className='products_list'>{  Array.isArray(productsList)? productsList.map((product)=>
                  ( <Product key={product.id} product={product} />)
                )
                :
        console.log('product list is not a array')
    }</div>
)
}

export default FilterList