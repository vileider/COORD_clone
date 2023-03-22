import NavBar from './NavBar';

export default function TopBar() {
  return (
    <>
      <NavBar />
      <div className="top-bar">
        <div className="left-side">
          <div className="user">user</div>
          <div className="config">config</div>
        </div>
        <div className="right-side">Login</div>
      </div>
    </>
  );
}
