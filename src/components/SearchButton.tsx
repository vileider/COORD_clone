import { useState } from 'react';
import Results from '@/pages/results';

export function SearchButton(props) {
  const newAddress = props.input;
  const [Address, setAddress] = useState<string>('');
  const handleClick = () => {
    setAddress(newAddress);
  };

  return (
    <>
      <div className="">
        {/* {Address} */}
        <Results Address={Address} />
        <button onClick={handleClick}>
          <span className="material-icons text-white">search</span>
        </button>
      </div>
    </>
  );
}
