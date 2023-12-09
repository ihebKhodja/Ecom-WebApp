import React, { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios';
import { ACTIONS_AUTH } from '../constants';

export const useRegister = () => {
    const[error, setError]= useState(null);
    const {dispatch} =useAuthContext()

    const register = async (data)=>{
         await axios.post('/register',
         data
        ).then(function(response){
            console.log(response.headers)
            const json= response.data;
            console.log('register json',json)
            dispatch({type:ACTIONS_AUTH.LOGIN, payload:json})
        
        }
        ).catch( function(er){
            console.log(er)
            setError(er)
        }
        );
    }
    
  return {register, error}
}   
