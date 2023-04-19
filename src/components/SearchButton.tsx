import Router from 'next/router';

export function SearchButton() {
  return (
    <>
      <div className="">
        <button
          onClick={() => Router.push('/results')}
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              Router.push('/results');
            }
          }}
        >
          <span className="material-icons text-white">search</span>
        </button>
      </div>
    </>
  );
}
