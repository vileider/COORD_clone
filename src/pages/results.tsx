export default function Results(props) {
  const Address = props.Address;
  return (
    <>
      <div className="centered-container">
        <div className="relative">
          <div className="text-xl ...">Results</div>
          <div>
            <div>{Address}</div>
            <div>
              <p>Address2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
