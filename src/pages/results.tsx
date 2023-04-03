import { useContext } from 'react';
import { AddressContext } from '../reusableComponents/input';

export default function Results() {
  const Address = useContext(AddressContext);
  return (
    <>
      <div className="centered-container">
        <div className="relative">
          <div className="text-xl ...">Results</div>
          <div>
            <div>{Address?.address}</div>
            <div>
              <p>Address2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
