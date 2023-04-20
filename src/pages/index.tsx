//import TopBar from '@/components/TopBar';
//import Input from '@/reusableComponents/input';
import SearchBar from '@/components/SearchBar';
import { GlobalContext } from '@/context/globalContext';
import React from 'react';
export default function Home() {
  const { data } = React.useContext(GlobalContext);
  const { searchResults } = data;
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setData({ someOtherState: '' });
  //     console.log('Fired setData');
  //   }, 1000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const mainContent = (
    <div className="main-page">
      {JSON.stringify(searchResults)}
      <SearchBar />
      {/* <Input /> */}
    </div>
  );
  return <>{mainContent}</>;
}
