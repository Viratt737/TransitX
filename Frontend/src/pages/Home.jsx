import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel"
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'
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
  const [vehicleFound, setVehicleFound] = useState(false)
  const vehicleFoundRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const waitingForDriverRef = useRef(null)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [activeField, setActiveField] = useState('')
  const [fare, setFare] = useState({})
      const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        if (e.target.value.length < 3) return 
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            console.log('API Response:', response.data)
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        if (e.target.value.length < 3) return
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }
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


  useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehicleFound ])


  useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ waitingForDriver ])

    async function findTrip() {
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setFare(response.data)

    }
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
          <form className='relative py-3' onSubmit={(e) =>{
            submitHandler(e)
           }}>
          
          <input 
            onClick={() =>{
              setPanelOpen(true)
              setActiveField('pickup')
            }}
            value={pickup}
            onChange={handlePickupChange}
            className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-3'
            type="text"
            placeholder='Add a pick-up location'
          />
          <input 
            onClick={() =>{
              setPanelOpen(true)
              setActiveField('destination')
            }}
            value={destination}
            onChange={handleDestinationChange}
            className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-3'
            type="text"
            placeholder='Enter your destination'
          />
        </form>
        <button onClick={findTrip}
        className='bg-black text-white px-4 py-2 rounded-2xl mt-3 w-full'>
            Find Trip
        </button>
        </div>
        <div ref={panelRef} className='h-0  bg-white'>
             <LocationSearchPanel setPanelOpen={setPanelOpen} vehiclePanel={vehiclePanel}  suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
             setVehiclePanel={setVehiclePanel} 
             setPickup={setPickup}
             setDestination={setDestination}
             activeField={activeField}

             />
        </div>
      </div>
      
      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full w-full bg-white px-3 py-6'>
          <VehiclePanel fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

     <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full w-full bg-white px-3 py-6 pt-12'>
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 translate-y-full w-full bg-white px-3 py-6 pt-12'>
          <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
     
     <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 translate-y-full w-full bg-white px-3 py-6 pt-12'>
          <WaitingForDriver  waitingForDriver={waitingForDriver}/>
      </div>

    </div>
  )
}

export default Home