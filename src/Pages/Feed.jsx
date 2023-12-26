import React, { useEffect, useContext, useState} from 'react'
import Product from '../Components/Product'
import { useProducts } from '../Hooks/useProducts'
import { ProductsContext } from '../Contexts/ProductsContext'

const Feed = () => {
    const {getAllProducts, error}= useProducts()
    const [isLoading, setIsloading]=useState(true)
    const {...state}=useContext(ProductsContext)
    const fetchData= async()=>{
      await getAllProducts()
      if(error)
        console.log(error)
      else{
      setIsloading(true)
      }
    }
  
  

    useEffect(()=>{
      fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isLoading] )
   
    return (
    <div className='feed-container'>

      <h2 className='title' >Featured Products</h2>
          {
            isLoading ?
          <div className='products_list'>
            {  state.productsList && state.productsList.map((product)=>
              ( <Product key={product.id} product={product} />)
            )}



          </div>
          :
          <div>
            Empty list animation
          </div>
        
          }
    </div>
  ) 
}

export default Feed