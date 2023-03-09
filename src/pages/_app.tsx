import "@/styles/globals.css";
import "@/styles/_app.css";

export default function App() {
  const searchPage = (
    <div className='main-page'>
      <div className='top-bar'>
        <div className='left-side'>
          <div className='user'>user</div>
          <div className='config'>config</div>
        </div>
        <div className='right-side'>Login</div>
      </div>
      <div className='content'>
        <div className='search-bar font-bold underline'>search bar</div>
      </div>
    </div>
  );
  return <>
  {searchPage}
  </>;
}
