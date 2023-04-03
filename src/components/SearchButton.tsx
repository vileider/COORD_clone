import Router from 'next/router';
import Input from '@/reusableComponents/input';

export function SearchButton() {
  return (
    <>
      <div className="">
        <Input />
        <button onClick={() => Router.push('/results')}>
          <span className="material-icons text-white">search</span>
        </button>
      </div>
    </>
  );
}
