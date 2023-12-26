import axios from "axios"
import { useParams } from 'react-router-dom'
import React, { useEffect, useContext, useState} from 'react'
import { ProductsContext } from "../Contexts/ProductsContext"
import { useProducts } from "../Hooks/useProducts"
import { useAuthContext } from "../Hooks/useAuthContext"

export const ProductDetails = () => {

  let {id} = useParams()
  const[quantity, setQuantity]=useState(1)
  const {...state }=useContext(ProductsContext)
  const {user, token}=useAuthContext()
  const {getProduct, error}= useProducts()  
  const[cartItem, SetCartItem]=useState({})

   const [product, setProduct]= useState()
  const [isLoading, setIsloading]=useState(false)

    const hanldeBuying =()=>{
    console.log('thanks for buying')
    // 

  }
    const addToCart= async()=>{
    await axios.post(`/cartitems/add/${id}`,
    {'quantity':quantity} ,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }

    }).then(async function(response){
      const json = await response.data
      if(json){
        // dispatch Cart Items context 
        console.log(json)
        // popup 
      }
    }).catch(function(error){
      console.error(error)
    })

    }
  const handleAddingToCart =async()=>{
    console.log('added to cart')
    if(user){
      addToCart()
    console.log('send')
    }
    // //  add to cart 
  }


const fetchData = ()=>{
  const result = getProduct(id, state.productsList)
  if(result){
    setProduct(getProduct(id, state.productsList))
    setIsloading(true)
  }
  else{
    console.log(error)
  }
}


useEffect (()=>{
  fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isLoading])



/**
 * Or we use get request from the server
 *  */ 

  // const getProductByID= async (id)=>{
  //       await axios.get(`/products/${id}`)
  //       .then( async function(response){
  //             const json= await response.data;
  //             setProduct(json)
  //             setIsloading(true)


  //       }).catch(function(err){
  //           console.log(err)

  //       })
    
  // }

  
  return (
    <div>
    {isLoading ? 
    
    <div className='product_item'>

      <img src={product.image} />
      <div className='info'>
            <h2>
               { product.name}
            </h2>
            <p>
               {product.description}
            </p>
            <div className='price'>
              <p>{product.price}</p> 
              <p>350$</p>{/* Old price if there is promotion */}
            </div>
            <div>
              Quantity chose
            </div>
            <div className='buttons'>
              <button onClick={hanldeBuying}>Buy</button>
              <button onClick={handleAddingToCart}>Add to Cart</button>
            </div>
          </div>
      </div>
      :
      <div>
        Loading animation
      </div>

    }
    </div>
  )
}
