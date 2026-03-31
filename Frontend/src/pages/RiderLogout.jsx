import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const RiderLogout = () => {
    const token = localStorage.getItem('rider-token')
    const navigate = useNavigate()

    axios.get(`${import.meta.env.VITE_API_URL}/rider/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('rider-token')
            navigate('/rider-login')
        }
    })

    return (
        <div>RiderLogout</div>
    )
}

export default RiderLogout