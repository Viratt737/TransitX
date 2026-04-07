import React from 'react'
import {Link} from 'react-router-dom'
const RiderRiding = () => {
  return (
      <div className='h-screen'>
         <div className='fixed p-6 top-0 flex items-center justify-between w-full'>
            <img
             className='w-16 absolute left-5 top-5'
             src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
             alt="uber"
             />
            <Link to="/rider-home" className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
              <i className ="text-lg font-bold ri-logout-box-r-line"></i>
           </Link>
         </div>
        <div className='h-3/5'>
            <img 
            className='h-full w-full object-cover' 
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" 
            alt="map" 
        />
        </div>
        <div className='h-2/5 p-6'>
            
        </div>
    </div>
  )
}

export default RiderRiding