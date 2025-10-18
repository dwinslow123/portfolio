import Image from "next/image";
import { constants } from "@/app/lib/constants";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <Image src={constants.PAGE_NOT_FOUND_IMAGE} alt="404 Error" width={600} height={400} className="object-contain" />
            <Link href={constants.HOME_URL} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Head Home
            </Link>
        </div>
    );
}

export default NotFound;