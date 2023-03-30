import { useState } from 'react';

const Input = () => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setInput(e.target.value);
  };

  return (
    <>
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
