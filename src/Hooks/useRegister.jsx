import React, { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios';
import { ACTIONS_AUTH } from '../Constants';

export const useRegister = () => {
    const[error, setError]= useState(null);
    const {dispatch} =useAuthContext()

    const singin = async (data)=>{
      
      await axios.post('/register',data
      ).then(async function(response){

        const json= await response.data;

        dispatch({type:ACTIONS_AUTH.LOGIN, payload:json})
        
      }).catch(function(error){
        setError(error.response)
      })
        
    }
    
  return {singin, error}
}   
