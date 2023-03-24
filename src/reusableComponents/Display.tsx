import { Address } from '@/components/NavBar';

// const Address : string = "642 address lane 000 000"

export default function DisplayAddress() {

    return(<>
    <div className="text-white py-1 px-4 rounded px-2 border border-white box-content h-10 w-64 ...">
    {Address}
    </div>
    </>)
};
