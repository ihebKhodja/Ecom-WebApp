import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const navigate = useNavigate()
  // console.log(product)

  const hanldeBuying =()=>{
    console.log('thanks for buying')
    navigate(`/product/${product.id}`)
  }



  return (
    <div className='product_item' onClick={hanldeBuying}>
    
      <img src={product.image} />
  
      <div className='info'>

            <h2>{product.name}</h2>
          <div className='price'>
            <p>{product.price}$ </p> 
          </div>
          
        </div>


    </div>
  )
  

}


export default Product