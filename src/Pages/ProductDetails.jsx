import axios from "axios"
import { useParams } from 'react-router-dom'
import React, { useEffect, useContext, useState} from 'react'
import { ProductsContext } from "../Contexts/ProductsContext"
import { useProducts } from "../Hooks/useProducts"
import { useAuthContext } from "../Hooks/useAuthContext"
import { CartItemsContext } from "../Contexts/CartItemsContext"
import '../styles/_ProductDetails.scss'
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";



export const ProductDetails = () => {

  let {id} = useParams()
  const[quantity, setQuantity]=useState(1)
  
  const {...state }=useContext(ProductsContext)
  const {user, token}=useAuthContext()
  const {getProduct, error}= useProducts()  
  const {dispatch} = useContext(CartItemsContext)

   const [product, setProduct]= useState()
  const [isLoading, setIsloading]=useState(false)
 
  const handleAdd=()=>{
        setQuantity(quantity+1)
    }

    const handleMinus= ()=>{
        if(quantity >1)
            setQuantity(quantity - 1)
    }

    const hanldeBuying =()=>{
    console.log('thanks for buying')
    // 

  }


  const handleAddingToCart =async()=>{
    console.log('added to cart')
    if(user){
      { 
        addToCart()
        // pop up 
        console.log('send')
      }
    }
    // //  add to cart 
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
          console.log(json)
          // pop
        }
      }).catch(function(error){
        console.error(error)
      })

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


//  * Or we use get request from the server
//  *  */ 

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
<section className="product-page">
      {isLoading ? 
    
    <div className='product_item'>
        <div className="image-container">
           <img src={product.image} alt="product's image"/>
        </div>
        <div className='info'>
          <div className="details">
                <h2>
                  { product.name}
                </h2>
                <p>
                  {product.description}
                </p>
                <div className='prices'>

                 <p>{product.price} $ </p> 

                </div>
                <div className="quantity">            
                  <p> Quantity:</p>
                   <div className="modify-quantity">
                    <button onClick={handleMinus}> <IoRemove /> </button>
                      {quantity}
                    <button onClick={handleAdd}><IoMdAdd/> </button>               
                  </div>
               </div>
                <div className='add-to-cart'>
                  <button onClick={handleAddingToCart}>Add to Cart</button>
                </div>
          </div>
           
        </div>
    </div>
      :
      <div>
        Loading animation
      </div>

    }
</section>
  )
}
