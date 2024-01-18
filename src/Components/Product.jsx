import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/_Product.scss'

const Product = ({product}) => {
  const navigate = useNavigate()

  const hanldeBuying =()=>{
    console.log('thanks for buying')
    navigate(`/product/${product.id}`)
  }



  return (
    <div className='product_item' onClick={hanldeBuying} >
      <div className='image-container' >
           <img src={product.image} />
      </div>
  
      <div className='info'>
          <h2>{product.name}</h2>

          <div className='price'>
            <p>{product.price}$ </p> 
            {/* <p>350$</p> */}
          </div>
          {/* <button onClick={hanldeBuying}>&rarr;</button> */}
          
        </div>


    </div>
  )
  

}


export default Product