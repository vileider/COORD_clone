import React from 'react';

export type GlobalContextType = {
  addressSearchString?: string;
  someOtherState?: string;
};

export const contextDefaultValues = {
  data: {
    addressSearchString: '',
    someOtherState: 'This is a test to see if state is working',
  } as GlobalContextType,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setData: (state: GlobalContextType) => {},
};

export const GlobalContext = React.createContext(contextDefaultValues);
