import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
        <h5 className='p-3 text-center w-[90%] absolute top-0' onClick={()=>{
            props.setVehiclePanel(false)
          }}><i className="text-xl ri-arrow-down-wide-fill"></i></h5>
          <h3 className='text-2xl font-semibold mb-5 m-2'>Confirm your Ride</h3>
          <div className='flex gap-2 justify-between flex-col items-center'>
            <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQLjsY-4pvrxwCn0QWDCGljnRsqqc1CpF-Q&s" alt="" />
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                   <i className=" text-lg ri-map-pin-2-fill"></i>
                   <div>
                     <h3 className='text-lg font-medium'>562/11-A</h3>
                     <p className='text-base text-gray-500'>Kankariya Talab, Bhopal</p>
                   </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                   <i className=" text-lg ri-map-pin-2-fill"></i>
                   <div>
                     <h3 className='text-lg font-medium'>562/11-A</h3>
                     <p className='text-base text-gray-500'>Kankariya Talab, Bhopal</p>
                   </div>
                </div>
                <div className='flex items-center gap-5 p-3 '>
                 <i className="text-lg ri-money-rupee-circle-fill"></i>
                   <div>
                     <h3 className='text-lg font-medium'>190.01</h3>
                     <p className='text-base text-gray-500'>Payment</p>
                   </div>
                </div>
            </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-2xl'> Confirm </button>
          </div>
    </div>
  )
}

export default ConfirmRide