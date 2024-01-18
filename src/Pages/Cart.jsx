import React, { useEffect, useState } from 'react'
import '../styles/_Cart.scss'
import axios from 'axios'
import { CartItem } from '../Components/CartItem'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartItemsContext } from '../Contexts/CartItemsContext'
import { useAuthContext } from '../Hooks/useAuthContext'
import { MdDelete } from "react-icons/md";
import Loader from './Loader'

const Cart = () => {
  const navigate = useNavigate()

  const {...state}=useContext(CartItemsContext)
  const {dispatch}=useContext(CartItemsContext)

  const {token}=useAuthContext()
   
  const [isLoading, setIsloading] =useState(false)

    const deleteItem= async(id)=>{
        await axios.delete(`/cartitems/${id}`,{
            headers: {
          'Authorization': `Bearer ${token}`
        }
        }
        ).then(async function(response){
            const json =await response.status;

            if(json){
              console.log(json,' cart item ', id , 'has been deleted' )  
              await updateTotal()
              const updatedCartItems = state.cartItems.filter(item => item.id !== id);
// check if the cartItems is empty
              if(!updatedCartItems || updatedCartItems.length === 0)
              {
                dispatch({type:'get_all', payload:[updatedCartItems, 0]})
              }

              dispatch({type:'delete', payload:updatedCartItems})
            }
        }).catch(function(error){
            console.log(error)
        })
    }
  
  const updateTotal=async()=>{
    if(token){
      await axios.get('/cartitems/user',{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(async function(response){
          const json = await response.data
          console.log(json)
          dispatch({type:'update_total', payload:json.cartTotal})
        }).catch(function(error){
          console.log(error)
        })
      }
  }
  
  const getItems= async()=>{
    if(token){
      await axios.get('/cartitems/user',{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(async function(response){
        const json = await response.data
          dispatch({type:'get_all', payload:json})
          setIsloading(true)        
          
        }).catch(function(error){
          console.log(error)
          console.log('Cart is empty') // component
        })
      }
      else{
        console.log('user is not logged In')
      }
  }


// Checkout button
 const handleCheckout = async()=>{
   navigate('/checkout')
     
 }


useEffect( ()=>{
  getItems()

// eslint-disable-next-line react-hooks/exhaustive-deps
},[isLoading])

  return (
    <div>

      { isLoading ?
    <section className='cart-list'>
      <div className='cart-item-wrapper'>
       {  Array.isArray(state.cartItems)? state.cartItems.slice().reverse().map((cartItem, index)=>
              (
                <div className='cart-item-container' key={cartItem.id}>
                  {/* <p>{index + 1 }</p> */}
                  <CartItem item={cartItem}  />
                  <div className='delete-container'>
                    <button id='delete' onClick={()=> deleteItem(cartItem.id) }><MdDelete /></button>
                  </div>
                </div>
              )

            )
            :
            console.log('items list is not a array')
            }
      
      </div>

      <div className='cart-total'>
          <div>
          <p>The Total Price:</p>
            <p>{state.cartTotal ? state.cartTotal : 0 } $</p>
          </div>
          <button onClick={()=>handleCheckout()}>Click to purchase</button>
      </div>
    </section>
      :

      <Loader />  
    }
    </div>
  )
}

export default Cart