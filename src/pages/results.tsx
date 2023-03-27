import DisplayAddress from '@/reusableComponents/Display';
import Address from '@/components/NavBar';

export default function Results() {
  return (
    <>
      <div className="container m-auto grid grid-cols-1 gap-4">
        <div className="relative">
          <div className="text-xl ...">Results</div>
          <div>
            <div>
              <DisplayAddress {...Address} />
            </div>
            <div>
              <DisplayAddress {...Address} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
