import { useState } from 'react';
// import Input from '@/reusableComponents/input';

export function SearchBar(props) {
  const newAddress = props.input;
  const [Address, setAddress] = useState('');
  const handleClick = () => {
    setAddress(newAddress);
  };

  return (
    <>
      <div className="">
        {Address}
        <button onClick={handleClick}>
          <span className="material-icons text-white">search</span>
        </button>
      </div>
    </>
  );
}
