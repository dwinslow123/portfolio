import Link from "next/link";

export default function Nav() {
    return (
        <div className="relative flex tab-group items-center justify-center w-full p-4 sm:p-8">
            <div className="border-solid border-1 border-gray-200 w-full"></div>
            <div className="flex p-0.5 text-center relative rounded-lg border-solid border-2 border-gray-200" role="tablist" aria-orientation="horizontal">
                <Link href="/" className="tab-link text-lg inline-block py-2 px-3 font-medium text-gray-900 rounded-lg hover:bg-gray-100">
                Home
                </Link>
                <Link href="/about" className="tab-link text-lg inline-block py-2 px-3 font-medium text-gray-900 rounded-lg hover:bg-gray-100">
                About
                </Link>
                <Link href="/contact" className="tab-link text-lg inline-block py-2 px-3 font-medium text-gray-900 rounded-lg hover:bg-gray-100">
                Contact
                </Link>
            </div>
            <div className="border-solid border-1 w-full border-gray-200"></div>
        </div>
        );
}