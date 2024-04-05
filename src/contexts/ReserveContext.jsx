import React, { createContext, useContext, useState } from 'react';

const ReserveContext = createContext({});

const ReserveProvider = ({ children }) => {
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
    <ReserveContext.Provider value={{ reservationDetails, updateReservationDetails }}>
      {children}
    </ReserveContext.Provider>
  );
};

const useReserveContext = () => {
  return useContext(ReserveContext);
};

export { ReserveProvider, useReserveContext };
