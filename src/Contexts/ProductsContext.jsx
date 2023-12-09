import { createContext, useReducer } from "react";
import { ACTION_PRODUCTS } from "../Constants";
import products from  '../../products.json'

export const ProductsContext = createContext('')

const productsReducer = (state, action)=>{
    switch(action.type){

    case ACTION_PRODUCTS.GETALL:
        return {productsList: action.payload}
    
    case ACTION_PRODUCTS.GET_PRODUCT:
        return {productsList: action.payload}

    case ACTION_PRODUCTS.GET_PRODUCTS_BY_CATEGORY:
        return {productsList: action.payload}
    
    case ACTION_PRODUCTS.ADD_PRODUCT:
            return {productsList: action.payload}
        
    case ACTION_PRODUCTS.UPDATE_PRODUCT:
        return {productsList: action.payload}

    case ACTION_PRODUCTS.DELETE_PRODUCT:
        return {productsList: action.payload}

    default:
        return {state}
    }


}

export const ProductsContextProvider = ({children}) =>{
    const [state, dispatch] =useReducer(productsReducer,
    {productsList: products}
    )
    return(
        <ProductsContext.Provider value={{...state, dispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}