import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"
import { ACTIONS_AUTH } from "../Constants"


export const useLogin = ()=>{
    const [error, setError]=useState(null)
    const {dispatch}=useAuthContext()

    const Login =  (data) =>{
          axios.post('/login', 
          data,
        ).then(function(response){
    
        const json= response.data
        dispatch({type: ACTIONS_AUTH.LOGIN, payload:json})
    
        }).catch(function(er){
            setError(er)
        })

    }

    return {Login, error}
}