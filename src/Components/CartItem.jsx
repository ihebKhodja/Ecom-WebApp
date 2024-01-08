import React, { useState, useEffect } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoRemove } from "react-icons/io5";
import '../styles/_CartItem.scss'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartItemsContext } from '../Contexts/CartItemsContext';
export const CartItem = ({item}) => {
    const navigate = useNavigate();

    const price = item.product.price;
    const {dispatch}=useContext(CartItemsContext);
    const [quantity, setQuantity]=useState(item.quantity)  
    // 
    const [total, setTotal]=useState(price*quantity)

   const handleAdd=()=>{
        setQuantity(quantity+1)
            
    }

    const handleMinus= ()=>{
        if(quantity >1)
            setQuantity(quantity - 1)
    }
    const goToProduct = ()=>{
        navigate(`/product/${item.product.id}`)

    }

// useEffect(()=>{
//     uploadTotal(item)
// // eslint-disable-next-line react-hooks/exhaustive-deps
// },[])  
// submit 
    /**
     * put cartitems/id to update quantity 
     *  items  selected in The order
     * 
    */

    const updateQunatity = ()=>{
        try{
            dispatch({type: 'update',payload: quantity});
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        updateQunatity()
        setTotal(price* quantity)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);


return (
    <div className='cart-item'>
        <img  onClick={goToProduct} src={item.product.image} alt='product image' />
        <div className='item-info'>
            <div>
                <h3>{item.product.name}</h3>
                <h3>{item.product.description}</h3>
            </div>

            <div className='price-qnt'>
                <div className='info-price'>
                    <p>Item price:</p>
                    <p>{price} $</p>
                </div>

                <div className="cart-modify-qnt">
                    <p>Quantity:</p>
                    <div>
                    {/* <button onClick={handleMinus}> <IoRemove /> </button> */}
                        {quantity}
                    {/* <button onClick={handleAdd}><IoMdAdd/> </button>            */}
                    </div>
                    <div>
                    <p>Total:</p>
                    <p>{total}</p>

                    </div>
                </div>
            </div>
        </div>
     
    
    </div>
  )
}
