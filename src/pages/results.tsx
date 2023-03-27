import DisplayAddress from '@/reusableComponents/Display';
import Address from '@/components/NavBar';

export default function Results() {
  return (
    <>
      <div className="centered-container">
        <div className="relative">
          <div className="text-xl ...">Results</div>
          <div>
            <div>
              <DisplayAddress {...Address} />
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
