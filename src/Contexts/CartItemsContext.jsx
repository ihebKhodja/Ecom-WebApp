import { createContext, useReducer } from "react";

export const CartIemssContext = createContext('')

const cartItemsReducer = (state, action)=>{
    switch(action.type){

    case 'get_all':
        return {cartItems: action.payload}
    
    default:
        return {state}
    }


}

export const CartIemssContextProvider = ({children}) =>{
    const [state, dispatch] =useReducer(cartItemsReducer,
    {cartItems:[]}  
    )
    return(
        <CartIemssContext.Provider value={{...state, dispatch}}>
            {children}
        </CartIemssContext.Provider>
    )
}