import React, { useEffect, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel"
function Home() {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)
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
             className='absolute opacity-0 top-0 left-0'>
              <i className="ri-arrow-down-wide-line"></i>
             </h5>
            <h4 className='text-2xl font-semibold'>Find A trip</h4>
        <form onSubmit={(e) =>{
            submitHandler(e)
        }}>
           <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
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
             <LocationSearchPanel />
        </div>
      </div>
      
      <div className='fixed z-10 bottom-0 w-full bg-white px-3 py-6'>
         <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
         <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQLjsY-4pvrxwCn0QWDCGljnRsqqc1CpF-Q&s" alt="" />
             <div className='w-1/2'>
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-line"></i>4</span></h4>
                <h5 className='font-medium text-base'>2 min away</h5>
                <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
             </div>
             <h2 className='text-lg font-semibold'>Rs.193.12</h2>
         </div>
         
{/* 2 */}
          <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" alt="" />
             <div className='w-1/2'>
                <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-line"></i>1</span></h4>
                <h5 className='font-medium text-base'>3 min away</h5>
                <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
             </div>
             <h2 className='text-lg font-semibold'>Rs.69.12</h2>
         </div>

{/* 3 */}
          <div className='flex border-2 border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46fNM1MPsh-kepvw7nyXhFLC7t93CemDKIA&s" alt="" />
             <div className='w-1/2'>
                <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-line"></i>3</span></h4>
                <h5 className='font-medium text-base'>4 min away</h5>
                <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
             </div>
             <h2 className='text-lg font-semibold'>Rs.101.12</h2>
         </div>
      </div>
    </div>
  )
}

export default Home