import { useAuthContext } from "../Hooks/useAuthContext"
import { useState } from "react";
import { useLogin } from "../Hooks/useLogin";
function Login() {
  const {...state}= useAuthContext()
  const {login, error}= useLogin()
  console.log(state)
   const [data, setData]=useState({
     email:'',
     password:'',  
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
      if(error)
        console.log(error)
      await login(data)
      console.log('login state', {...state})

      // console.log(reponse)
      // console.log('registration succeded');
    
      
  }
  
  return (
    <div >
      <h2>Sign in</h2>
      <form className="login">
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
      <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default Login