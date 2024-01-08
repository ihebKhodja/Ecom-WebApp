import { useAuthContext } from "../Hooks/useAuthContext"
import {useState } from "react";
import { useLogin } from "../Hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import '../styles/_Auth.scss';


function Login() {
  const navigate = useNavigate()
  const {user}= useAuthContext()

  const {Login, error}= useLogin()

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
    await Login(data)
     if (error){
        console.log(error)
        window.location.reload();
      }
    else {  
      if(user)
      navigate('/')
    }
    
  
  }
  
  
   

  return (
    <section className="login">
      <div className="container">

        <h2>Sign in</h2>
        <form className="login">
          <label>Email</label>
          <input name='email'
          placeholder="user@email.com"
                type='email'
                value={data.email}     
                onChange={handleChange} 

          />
          <label>Passowrd</label>
          <input name='password'
                type='password'
                placeholder="enter your password"
                value={data.password}     
                onChange={handleChange} 

          />
          <button onClick={handleSubmit}>Login</button>
          <p>Create an account, <Link to={'/signup'}>Click here</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login