import React from 'react'

const LocationSearchPanel = (props) => {
    const { suggestions = [], setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField } = props

    return (
        <div>
            {suggestions.length > 0 ? suggestions.map((suggestion, idx) => (
                <div
                    key={idx}
                    onClick={() => {
                        if (activeField === 'pickup') {
                            setPickup(suggestion)
                        } else {
                            setDestination(suggestion)
                        }
                        // setVehiclePanel(true)
                        // setPanelOpen(false)
                    }}
                    className='flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start cursor-pointer'
                >
                    <h2 className='bg-[#eee] h-10 flex items-center justify-center w-16 rounded-full'>
                        <i className="ri-map-pin-line"></i>
                    </h2>
                    <h5 className='text-lg font-medium'>{suggestion}</h5>  {/* ✅ .description hata diya */}
                </div>
            )) : (
                <p className='text-gray-400 text-center mt-5'>Type to search locations...</p>
            )}
        </div>
    )
}

export default LocationSearchPanel