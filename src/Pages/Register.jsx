import  { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import axios from 'axios';
import { useRegister } from './../Hooks/useRegister';

const Register = () => {
  // const [Authcontext] = useContext(authUser)
  const [isSubmited, setisSubmited] =useState(false);
  const {register, error}=useRegister()

  const [data, setData]=useState({
    name:'',
    email:'',
    password:'',
    password_confirmation:'',
    is_admin:''
  });



   const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    
  };

   const handleSubmit= async (e)=> {
      e.preventDefault();
      if(data.password == data.password_confirmation)
      {
        setisSubmited(true)
        await register(data)
        // navigate to home page
      }
      else{
        console.log(error)
        console.log('passwords do not match'); 
        // user's passwords do not match
      }
      
  }
  
  return (
    <div>
      <h2> Register Form</h2>
      <form className='register'
        onSubmit={handleSubmit}
      >
      <label>Name</label>
      <input name='name'
            type='text'
            value={data.name}  
            onChange={handleChange}    
      />
      <label>Email</label>
      <input name='email'
            type='email'
            value={data.email}      
            onChange={handleChange}    

      />
      <label>Passowrd</label>
      <input name='password'
            type='password'
            value={data.password}      
            onChange={handleChange}    

      />
      <label>Passowrd confirmation</label>
      <input name='password_confirmation'
            type='password'
            value={data.password_confirmation}   
            onChange={handleChange}    
  
      />
      <button type='submit'>Create Account</button>
      </form>
    </div>
  )
}

export default Register