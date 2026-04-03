import React from 'react'

function Home() {
  return (
    <div className='h-screen relative'>
      
      <img
        className='w-16 absolute left-5 top-5'
        src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
        alt="uber"
      />

      <div className='h-screen w-screen'> 
        <img 
          className='h-full w-full object-cover' 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgBWkh-2RpEXtRmA1vxakcVsTzG3XVMnd3Q&s" 
          alt="map" 
        />
      </div>

      <div className='bg-white absolute bottom-0 w-full p-5'>
        <h4 className='text-2xl font-semibold'>Find A trip</h4>

        <form>
          <input 
            className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-3'
            type="text"
            placeholder='Add a pick-up location'
          />

          <input 
            className='bg-[#eee] px-4 py-2 text-lg rounded-lg w-full mt-3'
            type="text"
            placeholder='Enter your destination'
          />
        </form>
      </div>

    </div>
  )
}

export default Home