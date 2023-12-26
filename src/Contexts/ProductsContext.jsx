import { createContext, useReducer } from "react";
import { ACTION_PRODUCTS } from "../Constants";

export const ProductsContext = createContext('')

const productsReducer = (state, action)=>{
    switch(action.type){

    case ACTION_PRODUCTS.GETALL:
        return {productsList: action.payload}
    
    default:
        return {state}
    }


}

export const ProductsContextProvider = ({children}) =>{
    const [state, dispatch] =useReducer(productsReducer,
    {productsList:[]}
    )
    return(
        <ProductsContext.Provider value={{...state, dispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}