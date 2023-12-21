import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { Navigate } from 'react-router-dom';
const Product = ({product}) => {
  
  // console.log(props)
  return (
    <div className='product_item'>

      <img src={product.image} />
        <div className='icon'>
          <FaRegHeart />
        </div>
      <div className='info'>
      <h2>{product.name}</h2>
      <p>{product.price}$ </p>

      </div>
    </div>
  )
}

export default Product