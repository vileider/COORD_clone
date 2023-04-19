import DisplayAddress from '@/reusableComponents/Display';

export default function Results() {
  // const input: string = useState(input);

  return (
    <>
      <div className="centered-container">
        <div className="relative">
          <div className="text-xl ...">Results</div>
          <div>
            <div>
              <DisplayAddress />{' '}
            </div>
            <div>
              <p>Address2</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
