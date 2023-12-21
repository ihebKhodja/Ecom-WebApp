import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"
import { ACTIONS_AUTH } from "../Constants"


export const useLogin = ()=>{
    const [error, setError]=useState()
    const {dispatch}=useAuthContext()

    const login =  (data) =>{
          axios.post('/login', 
          data,
        ).then(function(response){
           
                const json= response.data
                // console.log('login json',json)
                dispatch({type: ACTIONS_AUTH.LOGIN, payload:json})
            
        }).catch(function(er){
            console.log(er)
            setError(er)
        })

    }

    return {login, error}
}