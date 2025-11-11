'use client';

import { useEffect } from "react";
import Link from "next/link";

/** A component to handle errors in the Works section */
const WorksError = ({ error }: { error: Error }) => {

    useEffect(() => {
        console.error("Error in Works section:", error);
    }, [ error ]);

    return (
        <div className="w-full max-w-4xl mx-auto my-8 p-4 text-center">
            <h1 className="text-2xl font-bold mb-4 text-red-600">Something went wrong!</h1>
            <p className="mb-4">An unexpected error occurred while loading this project.</p>
            <Link href="/works" className="text-blue-500 hover:underline">Go back to Works</Link>
            <br />
        </div>
    );
};

export default WorksError;