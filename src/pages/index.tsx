//import TopBar from '@/components/TopBar';
import Input from '@/reusableComponents/input';
import SearchBar from '@/components/SearchBar';
import { GlobalContext } from '@/context/globalContext';
import React from 'react';
export default function Home() {
  const { data, setData } = React.useContext(GlobalContext);
  const { someOtherState } = data;
  React.useEffect(() => {
    setTimeout(() => {
      setData({ someOtherState: 'It worked' });
      console.log('Fired setData');
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const mainContent = (
    <div className="main-page">
      {someOtherState}
      <SearchBar />
      <Input />
    </div>
  );
  return <>{mainContent}</>;
}
