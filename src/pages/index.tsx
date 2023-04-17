import TopBar from '@/components/TopBar';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const mainContent = (
    <div className="main-page">
      <div className="top-bar">
        <div className="left-side"></div>
      </div>
      <TopBar />
      <SearchBar />
    </div>
  );
  return <>{mainContent}</>;
}
