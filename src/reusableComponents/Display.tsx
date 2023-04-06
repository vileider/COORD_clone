import { useContext } from 'react';
import { AddressContext } from '@/Context';

export default function DisplayAddress() {
  const { inputValue } = useContext(AddressContext);

  return (
    <>
      <div className="text-white py-1 px-4 rounded px-2 border border-white box-content h-10 w-64 ...">
        {inputValue}
      </div>
    </>
  );
}
