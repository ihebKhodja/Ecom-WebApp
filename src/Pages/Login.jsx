import { useAuthContext } from "../Hooks/useAuthContext"
import {useState } from "react";
import { useLogin } from "../Hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import '../styles/_Auth.scss';
import { useForm } from 'react-hook-form'



function Login() {
  const navigate = useNavigate()
  const {user}= useAuthContext()
  const {register,reset,formState: { errors }, handleSubmit}=useForm()

  const {Login, error}= useLogin()

    const onSubmit= async(data)=>{
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
        <form className="login" onSubmit={handleSubmit(onSubmit)}>

          <label>Email <span style={{color:'red'}}>*</span></label>

         
          <input
            {...register("email", {
              required: 'Email is required',
              pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid Email adress'
              }
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
        {errors.email && <p role="alert">{errors.email.message}</p>}

          <label>Passowrd <span style={{color:'red'}}>*</span></label>

          <input
          {...register("password", {
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password must be at least 5 characters long'
            },
          })}
          type="password"
          aria-invalid={errors.password ? "true" : "false"}
        />
            {errors.password && <p role="alert">{errors.password.message}</p>}

          <input className='submit' type="submit" />
          <p>Create an account, <Link to={'/signup'}>Click here</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login