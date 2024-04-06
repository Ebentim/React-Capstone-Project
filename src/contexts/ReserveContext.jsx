import React, { createContext, useContext, useState } from 'react';

const ReserveContext = createContext({});

const ReserveProvider = ({ children }) => {
  const [successful, setSuccessful] = useState(0)
  const [progress, setProgress] = useState(0)
  const [reservationDetails, setReservationDetails] = useState({
    personalDetails: {},
    tableDetails: {},
    additionalDetails: {}
  });

  const updateReservationDetails = (section, data) => {
    setReservationDetails(prevDetails => ({
      ...prevDetails,
      [section]: data
    }));
  };

  return (
    <ReserveContext.Provider value={{ reservationDetails, updateReservationDetails, progress, setProgress, successful, setSuccessful }}>
      {children}
    </ReserveContext.Provider>
  );
};

const useReserveContext = () => {
  return useContext(ReserveContext);
};

export { ReserveProvider, useReserveContext };
