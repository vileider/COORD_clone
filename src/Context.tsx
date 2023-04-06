import { createContext, useState } from 'react';
// import { SearchButton } from './components/SearchButton';
import { input } from './reusableComponents/input';

interface ContextInterface {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const AddressContext = createContext<ContextInterface>({
  inputValue: input,
  setInputValue: () => {},
});

export const ContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <AddressContext.Provider value={inputValue} function={setInputValue}>
      {children}
    </AddressContext.Provider>
  );
};
