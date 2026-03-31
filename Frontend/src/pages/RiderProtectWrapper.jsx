import React, {useContext, useEffect} from 'react'
import {RiderDataContext} from '../context/RiderContext'
import {useNavigate} from 'react-router-dom'


const RiderProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {rider, setRider} = useContext(RiderDataContext)
    const [isLoading, setIsLoading] = useState(true)
    console.log(token)



    useEffect(() => {
        if(!token){
            navigate('/rider-login')
        }
    } , [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/rider/profile`,{
        header: {
            Authorization : `Bearer ${token}`
        }
    }).then(Response =>{
        if(Response.status === 200){
            setRider(Response.data.rider)
            setIsLoading(false)
        }
    }).catch(err =>{
       console.log(err)
       localStorage.removeItem('token')
       navigate('/rider-login')
    })

    if(isLoading){
        return (
            <div>Loading..</div>
        )
    }
  return (
    <>
      {children}
    </>
  )
}

export default RiderProtectWrapper