import axios from "axios"
import { ProductsContext } from "../Contexts/ProductsContext"
import { useContext, useState } from "react"
import {ACTION_PRODUCTS } from "../Constants"

export const useProducts= ()=>{
    const context = useContext(ProductsContext);

    if(!context){
        throw Error('useProducts must be inside ProductsContextProvider')
    }else{
    const [error, setError]=useState()
    const {dispatch}=useContext(ProductsContext)

    const getProduct= (id, list)=>{
          const productId = list.map((product)=>{
            if(product.id ==id )
            return product
        })
            if(productId){
                for (let i = 0; i < productId.length; i++) {
                const productitem = productId[i];
                if (productitem) return productitem    
                }            
            }
            else 
                return null
    }

    const getAllProducts= async ()=>{
        await axios.get('/products')
        .then( async function(response){
             const json=  await response.data
            dispatch({type:ACTION_PRODUCTS.GETALL ,payload:json})

        }).catch(function(err){
            console.log(err)
            setError(err)

        })
    }
    
     return {getAllProducts, getProduct, error}
    }
    
    
}