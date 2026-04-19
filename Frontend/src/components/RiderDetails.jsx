import React, { useContext } from 'react'
import {RiderDataContext} from "../context/RiderContext"
const RiderDetails = () => {
  const {rider} = useContext(RiderDataContext)
    // if (!rider) return null 
  return (
    <div>
                 <div className='flex items-center justify-between'>
              <div className='flex items-center justify-start gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRImLvUm_sHU3FvABH6Cwga406z77arxOjQ&s" alt="" />
                {/* <h4>{rider.fullname.firstname+ " " + rider.fullname.lastname}</h4> */}
                 <h4>{rider?.fullname?.firstname} {rider?.fullname?.lastname}</h4>
              </div>
              <div>
                <h4 className='text-xl font-semibold text-green-600'>$295.20</h4>
                <p className='text-sm text-gray-600'>Earned</p>
              </div>
            </div>
            <div className='flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
              <div className='text-center'>
                <i className="text-3xl mb-2 font-extralight ri-timer-2-fill"></i>
                 <h5 className='text-lg font-medium'>10.2</h5>
                 <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center' >
                <i className="text-3xl mb-2 font-extralight ri-dashboard-2-line"></i>
                 <h5 className='text-lg font-medium'>10.2</h5>
                 <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
              <div className='text-center'>
                <i className="text-3xl mb-2 font-extralight ri-booklet-line"></i>
                 <h5 className='text-lg font-medium'>10.2</h5>
                 <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
    </div>
  )
}

export default RiderDetails