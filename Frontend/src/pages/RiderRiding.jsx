import React, { useEffect, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import {Link} from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const RiderRiding = (props) => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
        useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])
  return (
      <div className='h-screen relative'>
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
        <div className='h-4/5'>
            <img 
            className='h-full w-full object-cover' 
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" 
            alt="map" 
        />
        </div>
        <div className='h-1/5 p-6 flex items-center justify-center gap-10 relative bg-yellow-400' onClick={() =>{
            setFinishRidePanel(true)
        }}>
             <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() =>{

             }}>
            <i className="text-3xl text-black ri-arrow-down-wide-line"></i></h5>
           <h4 className='text-xl font-semibold'>4 km away</h4>
         <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>
        Complete Ride
    </button>
    </div>
       <div ref={finishRidePanelRef} className='fixed z-10 bottom-0  w-full translate-y-full bg-white px-3 py-6 pt-12'>
           <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>

    </div>
  )
}

export default RiderRiding