import React, { useEffect, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel"
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
function Home() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanelRef = useRef(null)
  const [confirmRidePanel,setConfirmRidePanel]= useState(false)
  const confirmRidePanelRef = useRef(null)
  const submitHandler = (e)=>{
        e.preventDefault()
  }
  
     useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [ panelOpen ])
  
    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePanel ])


    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehiclePanel ])



  return (
    <div className='h-screen relative overflow-hidden'>
      <img
        className='w-16 absolute left-5 top-5'
        src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
        alt="uber"
      />

      <div className='h-screen w-screen'> 
        <img 
          className='h-full w-full object-cover' 
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" 
          alt="map" 
        />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-5 relative'>
             <h5 ref={panelCloseRef} onClick={() =>{
                setPanelOpen(false)
             }}
             className='absolute opacity-0 top-0  w-[90%] text-xl '>
              <i className="ri-arrow-down-wide-line"></i>
             </h5>
            <h4 className='text-2xl font-semibold'>Find A trip</h4>
        <form onSubmit={(e) =>{
            submitHandler(e)
        }}>
           <div className='line absolute h-12 w-1 top-[45%] left-7 bg-gray-700 rounded-full'></div>
          <input 
            onClick={() =>{
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e) =>{
              setPickup(e.target.value)
            }}
            className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-3'
            type="text"
            placeholder='Add a pick-up location'
          />
          <input 
            onClick={() =>{
              setPanelOpen(true)
            }}
            value={destination}
            onChange={(e) =>{
              setDestination(e.target.value)
            }}
            className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-3'
            type="text"
            placeholder='Enter your destination'
          />
        </form>
        </div>
        <div ref={panelRef} className='h-0  bg-white'>
             <LocationSearchPanel setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
      
      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full w-full bg-white px-3 py-6'>
          <VehiclePanel  setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

     <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full w-full bg-white px-3 py-6'>
          <ConfirmRide />
      </div>
 
    </div>
  )
}

export default Home