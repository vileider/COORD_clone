import { AddressSearchContext } from '@/Context';
import Router from 'next/router';
import { useContext } from 'react';

const Input = () => {
  const { addressValue, setNewAddress } = useContext(AddressSearchContext);
  // const setNewAddress = useUpdateAddress();

  const handleChange = (e: any) => {
    console.log('1121');
    setNewAddress(e.target.value);
  };

  return (
    <div className="input-container">
      <div className="relative top-[150%] left-[-100%] row-start-6 col-end-4">
        {addressValue}
      </div>{' '}
      {/* For test to see the input field is working */}
      <input
        type="text"
        className="input"
        id="input"
        name="input"
        onKeyUp={(e) => {
          handleChange(e);
        }}
        onChange={() => {
          handleChange;
        }}
        onKeyPress={(e) => {
          if (e.key == 'Enter') {
            Router.push('/results');
          }
        }}
      />
      <button type="submit" onClick={() => Router.push('/results')}>
        <span className="material-icons dark:stroke-[#e25812] w-6 h-6 relative top-[25%] left-[55%] row-start-6 col-end-4">
          search
        </span>
      </button>
    </div>
  );
};

export default Input;
