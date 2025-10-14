import Image from "next/image";
import { constants } from "@/constants";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <Image src={constants.PAGE_NOT_FOUND_IMAGE} alt="404 Error" width={600} height={400} className="object-contain" />
        </div>
    );
}

export default NotFound;