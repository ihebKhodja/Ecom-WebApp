import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CartItem } from '../Components/CartItem'
import { useContext } from 'react'
import { CartItemsContext } from '../Contexts/CartItemsContext'
import { useAuthContext } from '../Hooks/useAuthContext'
import '../styles/_Cart.scss'
import { MdDelete } from "react-icons/md";
import { IoTrophy } from 'react-icons/io5'

const Cart = () => {
  
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
            console.log(json,' cart item ', id , 'has been deleted' )  
            const updatedCartItems = state.cartItems.filter(item => item.id !== id);
            dispatch({type:'get_all', payload:[updatedCartItems, state.cartTotal]})
            // updateTotal()

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
          dispatch({type:'delete', payload:json.cartItems})
          setIsloading(true)
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
        })
      }
  }

// useEffect(()=>{
//   updateTotal()

// },[state.cartItems])

useEffect( ()=>{
  getItems()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[isLoading, state.cartItems])

  return (
    <div>

      { isLoading ?
    <section className='cart-list'>
      <div className='cart-item-wrapper'>
      {/* <h2>Cart ({state.cartItems.length})</h2> */}
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
            <p>Subtotal</p>
            <p>Price in {state.cartTotal}$</p>
          </div>
          <p>The total is tat at</p>
          <button>Click to purchase</button>
      </div>
    </section>
      :

      <div>Loading animation</div>
    }
    </div>
  )
}

export default Cart