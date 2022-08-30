import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SignIn } from './signin/SignIn'
import { SignUp } from './signup/SignUp'
import { useSelector } from 'react-redux'
import { Home } from './home/Home'
import { NotFound } from './notfound/NotFound'
import { UserDetails } from './user-details/UserDetails'


export const Pages = () => {
  const loggedIn = useSelector(state => state.users.loggedIn)
  // Routes depens on logedIn that show if user is logged in or not
  return (
    <Routes>
      
      <Route path='/' element={loggedIn ? <Home /> : <SignIn />} />
      <Route path="/user" element={loggedIn ? <UserDetails /> : <SignIn />} />

      <Route path='/login' element={loggedIn ?<Home/> : <SignIn />} />
      <Route path='/signup' element={loggedIn ?<Home/> : <SignUp />} />

      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}
