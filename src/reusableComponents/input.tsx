import React from 'react';
import { GlobalContext } from '@/context/globalContext';

const Input = () => {
  const { data, setData } = React.useContext(GlobalContext);
  const { someOtherState } = data;

  const handleChange = (e: any) => {
    setData({ someOtherState: e.target.value });
  };

  return (
    <div className="input-container">
      <div className="relative top-[150%] left-[-100%] row-start-6 col-end-4"></div>{' '}
      {someOtherState}
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
      />
      {/* <button
        type="submit"
        onClick={() => Router.push('/results')}
        onKeyPress={(e) => {
          if (e.key == 'Enter') {
            Router.push('/results');
          }
        }}
      >
        <span className="material-icons dark:stroke-[#e25812] w-6 h-6 relative top-[25%] left-[55%] row-start-6 col-end-4">
          search
        </span>
      </button> */}
    </div>
  );
};

export default Input;
