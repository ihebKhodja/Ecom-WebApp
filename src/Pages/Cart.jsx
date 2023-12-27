
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CartItem } from '../Components/CartItem'
import { useContext } from 'react'
import { CartIemssContext } from '../Contexts/CartItemsContext'
import { useAuthContext } from '../Hooks/useAuthContext'

const Cart = () => {
  const {...state}=useContext(CartIemssContext)
  const {dispatch}=useContext(CartIemssContext)
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
            dispatch({type:'get_all', payload:updatedCartItems})

        }).catch(function(error){
            console.log(error)
        })
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


useEffect( ()=>{
  getItems()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[isLoading])

  return (
    <div>
      { isLoading ?
      <div>
       {  Array.isArray(state.cartItems)? state.cartItems.slice().reverse().map((cartItem)=>
              (
                <div key={cartItem.id}>
                  <CartItem item={cartItem}/>
                  <button onClick={()=> deleteItem(cartItem.id) }>delete</button>
                </div>
              )

            )
            :
            console.log('items list is not a array')
            }
      
      </div>
      :
      <div>Loading animation</div>
      }

    </div>
  )
}

export default Cart