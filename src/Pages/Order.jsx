import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import '../styles/_Auth.scss'
import '../styles/_Cart.scss'
import '../styles/_Order.scss'
import axios from 'axios'
import { useAuthContext } from "../Hooks/useAuthContext"
import { CartItemsContext } from '../Contexts/CartItemsContext'
import { useNavigate } from 'react-router-dom';

export const Order = () => {
  const {register,reset,formState: { errors }, handleSubmit}=useForm()
  const {token}=useAuthContext()
  const {...state}=useContext(CartItemsContext)
  const navigate=useNavigate()

    const onSubmit = async(data) =>{
      
      await axios.post('/order',
      {'total':state.cartTotal,
        'mobile':data.mobile,
        'adress':data.adress,
        'city':data.city,
        'province':data.province,
        'zipcode':data.zipcode
      } ,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }

      }).then(async function(response){
        const json = await response.data
        if(json){
          console.log('order submitted succeded',json)
          reset()
          // pop up order submitted
          navigate('/')
        }
      }).catch(function(error){
        console.error(error)
      })


    }

  return (
    <section className='order'>
    
    <div className='container'>
        <h2>Shipping Address</h2>
      <form className='checkout' onSubmit={handleSubmit(onSubmit)}>

          <label>Mobile number <span style={{color:'red'}}>*</span></label>
            <input
              {...register("mobile", {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/, 
                  message: 'Invalid phone number'
                }
              })}
              aria-invalid={errors.mobile ? "true" : "false"}
            />
          {errors.mobile && <p role="alert">{errors.mobile.message}</p>}


          <label>Address <span style={{color:'red'}}>*</span> </label>
            <input
              {...register("address", 
              {
                required:'Adress is required',
              minLength: {
              value: 5,
              message: 'Address must be at least 5 characters'
              }
              })}
              aria-invalid={errors.address ? "true" : "false"}
            />
            {errors.address && <p role="alert">{errors.address.message}</p>}



          <label> Province <span style={{color:'red'}}>*</span></label>
          <input
              {...register("province", 
              {
                required:'province is required',
              minLength: {
              value: 5,
              message: 'Province must be at least 5 characters'
              }
              })}
              aria-invalid={errors.province ? "true" : "false"}
            />
            {errors.province && <p role="alert">{errors.province.message}</p>}  

          <label> City <span style={{color:'red'}}>*</span></label>
          <input
              {...register("city", 
              {
                required:'city is required',
              minLength: {
              value: 5,
              message: 'city must be at least 5 characters'
              }
              })}
              aria-invalid={errors.city ? "true" : "false"}
            />
            {errors.city && <p role="alert">{errors.city.message}</p>}  
          
          <label>  Zipcode <span style={{color:'red'}}>*</span></label>
          <input
            {...register("zipcode", {
              required: 'Zip code is required',
              pattern: {
                value: /^[0-9]{5}(-[0-9]{4})?$/, 
                message: 'Invalid zip code'
              }
            })}
            aria-invalid={errors.zipcode ? "true" : "false"}
          />
          {errors.zipcode && <p role="alert">{errors.zipcode.message}</p>}


        <input className='submit' type="submit" value="Order"/>

      </form>


    </div>
    <div className='total'>
      <p>Total :</p>
      <p className='price'>{state.cartTotal ? state.cartTotal : 0 } $</p>
    </div>
        
    </section>
  )
}
