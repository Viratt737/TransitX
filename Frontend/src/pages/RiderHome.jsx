import React, { useEffect, useRef, useState } from 'react'
import RiderDetails from "../components/RiderDetails"
import RidePopUp from '../components/RidePopUp'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
const RiderHome = (props) => {
   const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
   const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false)
   const ridePopUpPanelRef = useRef(null)
   const confirmRidePopUpPanelRef = useRef(null)

     useGSAP(function () {
        if (ridePopUpPanel) {
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ ridePopUpPanel ])

         useGSAP(function () {
        if (confirmRidePopUpPanel) {
            gsap.to(confirmRidePopUpPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePopUpPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePopUpPanel ])

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
            <RiderDetails/>
        </div>

        <div ref={ridePopUpPanelRef} className='fixed z-10 bottom-0  w-full translate-y-full bg-white px-3 py-6 pt-12'>
           <RidePopUp  setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

       <div ref={confirmRidePopUpPanelRef} className='fixed h-full z-10 bottom-0  w-full translate-y-full bg-white px-3 py-6 pt-12'>
           <ConfirmRidePopUp  setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
    </div>
  )
}

export default RiderHome
