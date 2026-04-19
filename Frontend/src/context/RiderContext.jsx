// context/RiderContext.jsx - sirf context rakho
import { createContext, useState } from 'react'

export const RiderDataContext = createContext()

const RiderContext = ({ children }) => {
  const [rider, setRider] = useState(() => {
    const storedRider = localStorage.getItem('rider')
    return storedRider ? JSON.parse(storedRider) : null
  });

  const updateRider = (riderData) => {
    setRider(riderData);
    localStorage.setItem('rider', JSON.stringify(riderData));
  };

  const value = {
    rider,
    setRider,
    isLoading: false,
    error: null,
    updateRider
  };

  return (
    <RiderDataContext.Provider value={value}>
      {children}
    </RiderDataContext.Provider>
  )
}

export default RiderContext