import TopBar from "@/components/TopBar";
import SearchPage from "./Searchpage";

export default function Home() {
  const mainContent = (
    <div className='main-page'>
      <TopBar />
      <SearchPage />
    </div>
  );
  return <>{mainContent}</>;
}
