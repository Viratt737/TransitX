import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-3 text-center w-[90%] absolute top-0' onClick={()=>{
            props.setVehiclePanel(false)
          }}><i className="text-xl ri-arrow-down-wide-fill"></i></h5>
         <h3 className='text-2xl font-semibold mb-5 m-2'>Choose a Vehicle</h3>

         <div onClick={() =>{
             props.setConfirmRidePanel(true)
             props.selectVehicle('car')
             }}
            className='flex border-2 active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQLjsY-4pvrxwCn0QWDCGljnRsqqc1CpF-Q&s" alt="" />
             <div className='w-1/2'>
                <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-line"></i>4</span></h4>
                <h5 className='font-medium text-base'>2 min away</h5>
                <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
             </div>
             <h2 className='text-lg font-semibold'>Rs {props.fare.car}</h2>
         </div>
         

          <div onClick={() =>{
             props.setConfirmRidePanel(true)
             props.selectVehicle('moto')
              }}
           className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-10' src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85NTM4NTEyZC1mZGUxLTRmNzMtYmQ1MS05Y2VmZjRlMjU0ZjEucG5n" alt="" />
             <div className='w-1/2'>
                <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-line"></i>1</span></h4>
                <h5 className='font-medium text-base'>3 min away</h5>
                <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
             </div>
             <h2 className='text-lg font-semibold'>Rs {props.fare.moto}</h2>
         </div>


          <div onClick={() =>{
             props.setConfirmRidePanel(true)
             props.selectVehicle('auto')
         }}
           className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46fNM1MPsh-kepvw7nyXhFLC7t93CemDKIA&s" alt="" />
             <div className='w-1/2'>
                <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-line"></i>3</span></h4>
                <h5 className='font-medium text-base'>4 min away</h5>
                <p className='font-medium text-xs text-gray-600'>Affordable, compact rides</p>
             </div>
             <h2 className='text-lg font-semibold'>Rs {props.fare.auto}</h2>
         </div>
    </div>
  )
}

export default VehiclePanel