import TopBar from '@/components/TopBar';
import Button from '@/reusableComponents/button';
import SearchPage from './Searchpage';

export default function Home() {
  const mainContent = (
    <div className='main-page'>
      <div className='top-bar'>
        <div className='left-side'>
          {/* <div className='user'>user</div>
          <div className='config'>config</div> */}
        </div>
        {/* <div className='right-side'>Login</div> */}
      </div>
      <TopBar />
      <SearchPage />
      <Button />
    </div>
  );
  return <>{mainContent}</>;
}
