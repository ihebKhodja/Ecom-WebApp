import { useRegister } from './../Hooks/useRegister';
import { useNavigate } from "react-router-dom";
import '../styles/_Auth.scss';
import { useForm } from 'react-hook-form'

const Register = () => {
  const navigate= useNavigate()
  const {singin, error}=useRegister()
  const {register,reset,formState: { errors }, handleSubmit}=useForm()

const onSubmit= async(data)=>{
     if(data.password == data.password_confirmation)
      {
        await singin(data)
         navigate('/')
      }
      else{
        console.log(error)
        /// reset form's passwords
        console.log('passwords do not match'); 
        reset()
        // user's passwords do not match
      }

    }
  
  
  return (
    <section className='register'>
    <div className='container'>

      <h2> Create an Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

      <label>Name <span style={{color:'red'}}>*</span></label>

      <input
            {...register("name", 
            {
              required:'Name is required',
            minLength: {
            value: 4,
            message: 'Name must be at least 5 characters'
            }
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && <p role="alert">{errors.name.message}</p>}

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

      <label>Passowrd confirmation <span style={{color:'red'}}>*</span></label>
       <input
          {...register("password_confirmation", {
            required: 'password_confirmation is required',
            minLength: {
              value: 5,
              message: 'password_confirmation must be at least 5 characters long'
            },
          })}
          type="password"
          aria-invalid={errors.password_confirmation ? "true" : "false"}
        />
            {errors.password_confirmation && <p role="alert">{errors.password_confirmation.message}</p>}

          <input className='submit' type="submit" />
      </form>
    </div>
    </section>
  )
}

export default Register