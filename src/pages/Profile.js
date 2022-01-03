import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import './page.css'
import { Navigate } from 'react-router-dom'

const Profile = () => {
    const[error ,setError] = useState("")
    const navigate = Navigate()

    const [logout] = useAuth()

    const handleLogout= async()=>{
        setError(" ")
        try{
            await logout();
            navigate.push('/home')
            

        }
        catch{
            setError('failed to logout')
        }
        

    }
    return (
        <div id='profile'>
            Profile
            {error && <div className='alert danger'>{error}</div>}
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Profile
