export default function TopBar() {
  const topBar = (
    <div className='top-bar'>
      <div className='left-side'>
        <div className='user'>user</div>
        <div className='config'>config</div>
      </div>
      <div className='right-side'>Login</div>
    </div>
  );
  return <>{TopBar}</>;
}
