import "./searchpage.module.css";

export default function SearchPage() {
  const searchElements = (
    <div className='search-elements'>
      <div className='localization-tracking'>LoTr</div>
      <div className='top-box'>top box</div>
      <div className='search-results'> search results</div>
      <div className='bottom-box'>bottom box</div>
      <div className='submit-search'> button</div>
    </div>
  );
  return <>{searchElements}</>;
}
