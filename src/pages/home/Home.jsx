import React, { useEffect, useState } from 'react'
import axios from 'axios'
import userSlice from '../../store/userSlice'
import { Navigation } from '../../components/Navigation'

export const Home = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')

    async function fetchUsers() {

      try {
          setError('')
          const res = await axios.get('https://reqres.in/api/users?page=2')
          console.log(res.data.data)
          setUsers(res.data.data)


      } catch (err) {
          setError(err.message)
      }

  }

    useEffect(() => {
      fetchUsers()
    }, [])
    
  return (
    <div>
      <Navigation/>
        <h1>Users</h1>

        <div className='users-container'>
        {
            users.map(user => {
                return (
                  <div key={user.id} className='m-3'>
                  <img src={user.avatar} alt="avatar" />
                  <p>{user.first_name}</p>
                  <p>{user.last_name}</p>
                  <p>{user.email}</p>
                  </div>
                )
                
        })
        
        }
        </div>
    </div>
  )
}
