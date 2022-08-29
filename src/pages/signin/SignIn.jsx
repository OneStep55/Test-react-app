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
  const loggedIn = useSelector(state => state.users.loggedIn)
  const  dispatch = useDispatch()
  const navigation = useNavigate()
  

  function handleSubmit (e) {
    e.preventDefault()
    var userExist = false
    users.map(user => {
      if (user.email === email) {
        userExist = true
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
    <h1>Sign In</h1>

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

        <button className='rounded'>Sign in</button>
    </form>

    <p>Dont have an account? <Link to ='/' >SignUp</Link></p>
</div>
  )
}
