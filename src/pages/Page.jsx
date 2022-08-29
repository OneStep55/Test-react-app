import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn } from './signin/SignIn'
import { SignUp } from './signup/SignUp'
import { useSelector } from 'react-redux'
import { Home } from './home/Home'
import { NotFound } from './notfound/NotFound'

export const Page = () => {
  const loggedIn = useSelector(state => state.users.loggedIn)
  return (
    <Routes>
      {
        true ? (
          <>
            <Route path='/' element={<Home />} />
          </>
        ) : (
          <>
            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<SignIn />} />
          </>
        )
      }

      <Route path='*' element={<NotFound/>}/>

    </Routes>
  )
}
