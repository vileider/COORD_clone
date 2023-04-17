import React, { createContext, useState, useContext } from 'react';
// import { SearchButton } from './components/SearchButton';

const AddressSearchContext = React.createContext();
const UpdateAddressSearchContext = React.createContext();

export function useAddress() {
  return useContext(AddressSearchContext);
}

export function useUpdateAddress() {
  return useContext(UpdateAddressSearchContext);
}

export function AddressContextProvider({ children }) {
  const [addressValue, setAddressValue] = useState('adlfkhjsadfj');

  return (
    <AddressSearchContext.Provider value={addressValue}>
      <UpdateAddressSearchContext.Provider value={setAddressValue}>
        {children}
      </UpdateAddressSearchContext.Provider>
    </AddressSearchContext.Provider>
  );
}
