import React, { useState, useEffect } from 'react'

export const CartItem = ({item}) => {

    const price = item.product.price;
    const [total, setTotal]=useState(price)
    const [quantity, setQuantity]=useState(item.quantity)  

    const handleAdd=()=>{
        setQuantity(quantity+1)
    }

    const handleMinus= ()=>{
        if(quantity >1)
            setQuantity(quantity - 1)
    }

    useEffect(() => {
        setTotal(price * quantity);

    }, [quantity, price]);


return (
    <div>
        <h2>
        CartItem {item.id}
        </h2>

        <img src={item.product.image} />
        <p>{quantity}</p>
        <p>{ total}</p>
        <button onClick={handleMinus}> - </button>
        <button onClick={handleAdd}>+ </button>
    
    </div>
  )
}
