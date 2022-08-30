import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../store/userSlice'
import './homepage.css'
import { Navigation } from '../../components/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export const Home = ({ navigation }) => {


  // take all registred users from store
  const registredUsers = useSelector(state => state.users.users)
  // take all users loaded from url
  const users = useSelector(state => state.users.loadedUsers)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // disptach fetchUsers function that fethc users from url when page is loaded
  useEffect(() => {
    dispatch(fetchUsers())
    
  }, [])

  return (
    <div>
      <Navigation />
      <h2 className='m-5 bold'>User info</h2>
      <div >
        {
          registredUsers.map(user => {
            return (
      
              <div key={user.id} className='m-5'>
                <p>Name: {user.name}</p>
                <p>Last name: {user.lastName}</p>
                <p>Email: {user.email}</p>
              </div>
            )
          })
        }
      </div>

      <h2 className=' text-center bold'>Users</h2>
      <div className='users-container'>
        {
          users.map(user => {
            return (
              <div key={user.id} className='m-3 block py-3 px-5 rounded-lg shadow-lg bg-white max-w-sm'>
                <img className='avatar' src={user.avatar} alt="avatar" />
                <p>{user.first_name}</p>


                <button className=' bg-gray-400 border-2 py-1 px-2 mt-3' onClick={() => {
                          // navigate to User Details page and pass user to it
                          navigate("/user", { state: { user } });
                        }}>View</button>

                      



              </div>
            )

          })
        }
      </div>
    </div>
  )
}
