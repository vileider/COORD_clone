import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <div>
        <Link
          className="text-white py-1 px-4 rounded px-2 border border-white absolute left-0 top-0"
          href="/settings"
        >
          <span className="material-icons text-white">settings</span> Settings{' '}
        </Link>

        <Link
          className="text-white py-1 px-4 rounded px-2 border border-white absolute right-0 top-0"
          href="/login"
        >
          {' '}
          Login{' '}
        </Link>
      </div>
    </>
  );
}
