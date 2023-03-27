import DisplayAddress from '@/reusableComponents/Display';
import Address from '@/components/NavBar';

export default function Results() {
  return (
    <>
      <div className="container m-auto grid grid-cols-1 gap-4 place-items-center">
        <div className="">
          <div className="text-xl ...">Results</div>
          <div>
            <div className="py-1">
              <DisplayAddress {...Address} />
            </div>
            <div className="py-1">
              <DisplayAddress {...Address} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
