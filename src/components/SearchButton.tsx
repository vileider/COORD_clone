import { useState } from 'react';
import Input from '@/reusableComponents/input';

interface InputProps {
  input: string;
  setInput: (input: string) => void;
}

export function SearchButton(props: InputProps) {
  // const newAddress = props.input;
  // const [Address, setAddress] = useState<string>('');
  const { input, setInput } = props;
  const handleClick = (input: string) => {
    setInput(input);
  };

  return (
    <>
      <div className="">
        {/* {Address} */}
        <Input />
        <button onClick={() => handleClick}>
          <span className="material-icons text-white">search</span>
        </button>
      </div>
    </>
  );
}
