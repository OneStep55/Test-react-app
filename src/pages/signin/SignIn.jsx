import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { login } from '../../store/userSlice'
import {Link, Navigate, useNavigate} from 'react-router-dom'

export const SignIn = () => {
  const users = useSelector(state => state.users.users)
 
  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[error, setError] = useState('')
  const  dispatch = useDispatch()
  const navigation = useNavigate()
  

  // check input values and dispatch login function in userSlice if everything is ok
  function handleSubmit (e) {
    e.preventDefault()
    var userExist = false
    users.map(user => {
      // if there is user with given email then users exist
      if (user.email === email) {
        userExist = true
        // if password is correct user can login
        if (user.password === password) {
          dispatch(login())
          setError('')
          navigation('/')
        } else {
          setError('Wrong password')
        }
      }
    })

    if (!userExist) {
      setError('User does not exist')
    }
    
    
  }
  return (
    <div className='signin-box'>
    <h1 className='text-2xl font-bold'>Sign In</h1>

    <form onSubmit={(e) => handleSubmit(e)}>


        <label htmlFor="">Email</label>
        <input 
        type='email' 
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}/>

        <label htmlFor="">Password</label>
        <input 
        type='password'
        value = {password}
        onChange = {(e) => setPassword(e.target.value)} />

        {error && <p className='error'>{error}</p>}

        <button className='rounded btn-green'>Sign in</button>
    </form>

    <p className='m-5 '>Dont have an account? <Link to ='/signup' className=' text-blue-400 underline'>Sign Up</Link></p>
</div>
  )
}
