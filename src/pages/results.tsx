import { useState } from 'react';
import { inputValue } from '@/Context';

export default function Results() {
  // const input: string = useState(input);
  console.log(inputValue);
  return (
    <>
      <div className="centered-container">
        <div className="relative">
          <div className="text-xl ...">Results</div>
          <div>
            <div>{inputValue}</div>
            <div>
              <p>Address2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
