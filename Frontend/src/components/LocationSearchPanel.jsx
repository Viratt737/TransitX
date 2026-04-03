import React from 'react'

const LocationSearchPanel = () => {
    const loactions = [
        "4/184 Ambedkarpuram awas vikas kalyanpur kanpur",
        "1st Floor, 118/330, Kaushalpuri, Gumti Number 5, Kanpur, Uttar Pradesh, 208012.",
        "118/163-B, Kaushalpuri, Kanpur Nagar, Uttar Pradesh, 208012.",
        "Commercial area (near Octave, Red Chief), Gumti No 5, Kanpur."
    ]
  return (
    <div>
         {
            loactions.map(function(elem){
                return  <div className='flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start'>
            <h2 className='bg-white h-10 flex items-center justify-center w-16 rounded-full'>
                <i className="ri-map-pin-line"></i>
            </h2>
            <h5 className='text-lg font-medium'>{elem}</h5>
        </div>
            })
         }
        
    </div>

    
  )
}

export default LocationSearchPanel