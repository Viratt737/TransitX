import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RiderLogout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token') 

        axios.get(`${import.meta.env.VITE_BASE_URL}/rider/logout`, { 
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token')
                navigate('/rider-login')
            }
        }).catch((err) => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/rider-login')
        })
    }, [])

    return (
        <div>Logging out...</div>
    )
}

export default RiderLogout
