// should import var 'Address' from a function that returns the selected address
import { Address } from '@/components/NavBar';

export default function DisplayAddress() {
  return (
    <>
      <div className="text-white py-1 px-4 rounded px-2 border border-white box-content h-10 w-64 ...">
        {Address}
      </div>
    </>
  );
}
