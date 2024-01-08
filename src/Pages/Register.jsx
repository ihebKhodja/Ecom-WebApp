import  { useState } from 'react'
import { useRegister } from './../Hooks/useRegister';
import { useNavigate } from "react-router-dom";
import '../styles/_Auth.scss';

const Register = () => {
  const navigate= useNavigate()
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
       navigate('/')
      }
      else{
        console.log(error)
        /// reset form's passwords
        console.log('passwords do not match'); 
        // user's passwords do not match
      }
      
  }
  
  return (
    <section className='register'>
    <div className='container'>

      <h2> Create an Account</h2>
      <form className='register'
        onSubmit={handleSubmit}
      >
      <label>Name</label>
      <input name='name'
            type='text'
            placeholder='Fullname'
            value={data.name}  
            onChange={handleChange}    
      />
      <label>Email</label>
      <input name='email'
          placeholder='Example user@email.com'
            type='email'
            value={data.email}      
            onChange={handleChange}    

      />
      <label>Passowrd</label>
      <input name='password'
      placeholder='Enter your passowrd'
            type='password'
            value={data.password}      
            onChange={handleChange}    

      />
      <label>Passowrd confirmation</label>
      <input name='password_confirmation'
      placeholder='Confirm your passowrd'

            type='password'
            value={data.password_confirmation}   
            onChange={handleChange}    
  
      />
      <button type='submit'>Create Account</button>
      </form>
    </div>
    </section>
  )
}

export default Register