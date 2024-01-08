import { createContext, useReducer } from "react";

export const CartItemsContext = createContext('')

const cartItemsReducer = (state, action)=>{
    switch(action.type){

    case 'get_all':
        return {
        cartItems: action.payload.cartItems,
        cartTotal:action.payload.cartTotal}

    case 'delete':
        return{
            cartItems:action.payload.cartItems
        }
        
    case 'update':
        return {...state, cartItems: state.cartItems.map((item)=>
            item.id === action.payload.itemId 
            ? {...item, quantity: action.payload.quantity}
            : item
            )
        }
    default:
        return {state}
    }


}

export const CartItemsContextProvider = ({children}) =>{
    const [state, dispatch] =useReducer(cartItemsReducer,
    {cartItems:[],cartTotal:0}  
    )
    return(
        <CartItemsContext.Provider value={{...state, dispatch}}>
            {children}
        </CartItemsContext.Provider>
    )
}