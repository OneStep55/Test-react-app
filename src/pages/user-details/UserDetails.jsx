import React from 'react'
import { useLocation } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';
// Page for each user details
export const UserDetails = () => {
    // take user from useLocation
    const location = useLocation();
    const {user} = location.state

    // Output user
    
  return (


    
    <> 
        <Navigation/>
        <div className='m-5'>
            <img src={user.avatar} className = 'w-40'/>
            <p className=' '>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
        </div>
    </>
  )
}
