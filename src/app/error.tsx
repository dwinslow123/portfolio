'use client';
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
    useEffect(() => {
        console.error("Error occurred:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <button onClick={reset} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Try again
            </button>
        </div>
    );
}

export default Error;