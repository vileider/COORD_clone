import React from 'react';
import { GlobalContext } from '@/context/globalContext';
export default function DisplayAddress() {
  const { data } = React.useContext(GlobalContext);
  const { someOtherState } = data;

  return (
    <>
      <div className="text-white py-1 px-4 rounded px-2 border border-white box-content h-10 w-64 ...">
        {someOtherState}
      </div>
    </>
  );
}
