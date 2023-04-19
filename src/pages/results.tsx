import DisplayAddress from '@/reusableComponents/Display';

export default function Results() {
  // const input: string = useState(input);

  return (
    <>
      <div className="container m-auto grid grid-cols-1 gap-4 place-items-center">
        <div className="">
          <div className="text-xl ...">Results</div>
          <div>
            <div>
              <DisplayAddress />{' '}
            </div>
            <div>
              <DisplayAddress />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
