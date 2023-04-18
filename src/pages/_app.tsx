import '@/styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import {
  GlobalContextType,
  contextDefaultValues,
  GlobalContext,
} from '@/context/globalContext';

export default function App({ Component, pageProps }: AppProps) {
  const [data, setData] = React.useState(contextDefaultValues.data);
  const changeValues = (value: GlobalContextType) => {
    setData(data && value);
  };
  return (
    <GlobalContext.Provider value={{ data, setData: changeValues }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}
