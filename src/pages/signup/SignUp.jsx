import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/userSlice'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
export const SignUp = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      if (name.trim().length === 0) {
        setError('Name is requred')
        return
      }
      if (lastName.trim().length === 0) {
        setError('Last name is requred')
        return
      }
      if (email.trim().length === 0) {
        setError('Name is requred')
        return
      }
      setError('')
      var user = {
        name,
        lastName,
        email,
        password
      }

      

      dispatch(addUser(user))
      navigate('/login')
    }
  return (
    <div className='signup-box'>
        <h1 className='text-2xl bold'>Sign Up</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="">First Name</label>
            <input 
            type='text' 
            value={name}
            onChange = {(e) => setName(e.target.value)} />

            <label htmlFor="">Last Name</label>
            <input 
            type='text' 
            value={lastName}
            onChange = {(e) => setLastName(e.target.value)} />

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

            <button className='rounded'>SignUp</button>
        </form>

        <p>Already have an account? <Link to ='/login' >SignIn</Link></p>
    </div>
  )
}
