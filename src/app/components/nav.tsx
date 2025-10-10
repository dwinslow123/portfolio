import Link from "next/link";

export default function Nav() {
    return (
        <div className="relative tab-group">
            <div className="flex p-0.5 text-center relative rounded-lg" role="tablist" aria-orientation="horizontal">
                <Link href="/" className="tab-link text-lg inline-block py-2 px-3 font-medium text-gray-900 rounded-lg" aria-current="page">
                (Home)
                </Link>
                <Link href="/about" className="tab-link text-lg inline-block py-2 px-3 font-medium text-gray-500 rounded-lg">
                (About)
                </Link>
                <Link href="/contact" className="tab-link text-lg inline-block py-2 px-3 font-medium text-gray-500 rounded-lg">
                (Contact)
                </Link>
            </div>
        </div>
        );
}