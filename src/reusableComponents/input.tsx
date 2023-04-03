import { useState } from 'react';
const Input = () => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setInput(e.target.value);
  };

  return (
    <div className="input-container">
      <div>{input}</div> {/* For test to see the input field is working */}
      <input
        type="text"
        className="input"
        id="input"
        name="input"
        onChange={handleChange}
      />
      <span className="material-icons dark:stroke-[#e25812] w-6 h-6 relative top-[-200%] left-[55%] col-end-4">
        search
      </span>
    </div>
  );
};

export default Input;
