import React, { useContext, useEffect, useState } from 'react'
import { RiderDataContext } from '../context/RiderContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RiderProtectWrapper = ({ children }) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { rider, setRider } = useContext(RiderDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/rider-login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/rider/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setRider(response.data.rider)
                setIsLoading(false)
            }
        }).catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            navigate('/rider-login')
        })
    }, [token])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return <>{children}</>
}

export default RiderProtectWrapper