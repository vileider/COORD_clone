import React, { useState } from 'react';
// import { SearchButton } from './components/SearchButton';

interface addressContext {
  addressValue: string;
  //setAddressValue?: () => void;
}

// const defaultState = {
//   addressValue: '',
// };
const AddressSearchContext = React.createContext<{
  addressValue: addressContext;
  setAddressValue: React.Dispatch<React.SetStateAction<addressContext>>;
}>();

//export const AddressSearchContext = React.createContext(defaultState);
//const UpdateAddressSearchContext = React.createContext();

// export function useAddress() {
//   return useContext(AddressSearchContext);
// }

// export function useUpdateAddress() {
//   return useContext(UpdateAddressSearchContext);
// }

export function AddressContextProvider({ children }) {
  const [addressValue, setAddressValue] = useState<addressContext>('test');

  return (
    <AddressSearchContext.Provider value = {{ addressValue, setAddressValue }}>
        {children}
    </AddressSearchContext.Provider>
  );

 
}

