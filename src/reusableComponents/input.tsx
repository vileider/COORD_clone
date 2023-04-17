import { useState } from 'react';
import { useAddress, useUpdateAddress } from '@/Context';

const Input = () => {
  const newAddress = useAddress();
  const setNewAddress = useUpdateAddress();

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setNewAddress(e.target.value);
  };

  return (
    <div className="input-container">
      <div className="relative top-[150%] left-[-100%] row-start-6 col-end-4">
        {newAddress}
      </div>{' '}
      {/* For test to see the input field is working */}
      <input
        type="text"
        className="input"
        id="input"
        name="input"
        onChange={handleChange}
      />
      <span className="material-icons dark:stroke-[#e25812] w-6 h-6 relative top-[25%] left-[55%] row-start-6 col-end-4">
        search
      </span>
    </div>
  );
};

export default Input;
