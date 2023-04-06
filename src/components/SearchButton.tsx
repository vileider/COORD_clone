import { useContext } from 'react';
import Router from 'next/router';
import { AddressContext } from '@/Context';

export function SearchButton() {
  const value = useContext(AddressContext);
  return (
    <>
      {value}
      <div className="">
        <button onClick={() => Router.push('/results')}>
          <span className="material-icons text-white">search</span>
        </button>
      </div>
    </>
  );
}
