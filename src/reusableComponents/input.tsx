import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';

const Input = () => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <SearchBar input={input} />
      <div>{input}</div> {/* For test to see the input field is working */}
      <input
        type="text"
        className="input"
        id="input"
        name="input"
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
