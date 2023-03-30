//import NavBar from './NavBar';

export default function TopBar() {
  return (
    <>
      {/*<NavBar />*/}
      <div className="top-bar bg-[#dadada] h-16 drop-shadow-xl grid grid-rows-1 grid-cols-3 gap-4">
        <img
          className="logo h-24 col-start-2 col-span-2 absolute top-[-25%]"
          src="https://cdn.coord.uk/coord.png"
        />
        {/*<div className="left-side">
          <div className="user">user</div>
          <div className="config">config</div>
        </div>
  <div className="right-side">Login</div>*/}
      </div>
    </>
  );
}
