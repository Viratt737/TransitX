import React, {useContext, useEffect} from 'react'
import {UserDataContext} from '../context/UserContext'
import {useNavigate} from 'react-router-dom'


const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true)
    console.log(token)
    useEffect(() => {
        if(!token){
            navigate('/login')
        }
     
      axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      header:{
        Authorization: `Bearer ${token}`
      }
    }).then(Response =>{
        if(Response.status === 200){
          setUser(Response.data.user)
          setIsLoading(false)
        }
    }).catch(err =>{
       console.log(err)
       localStorage.removeItem('token')
       navigate('/login')
    })

    } , [token])
  
    if(isLoading){
      return(
        <div>Loading ..</div>
      )
    }
  
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper