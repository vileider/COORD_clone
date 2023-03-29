import { useState } from 'react';
import Input from '@/reusableComponents/input';

export function SearchBar() {
  const newAddress = 'this is a string';
  const [Address, setAddress] = useState('');
  const handleClick = () => {
    setAddress(newAddress);
  };

  return (
    <>
      <div className="">
        {Address}
        <Input />
        <button onClick={handleClick}>
          <span className="material-icons text-white">search</span>
        </button>
      </div>
    </>
  );
}
