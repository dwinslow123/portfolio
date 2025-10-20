import { signOut } from "@/auth";

const SignOutButton = () => {
    return <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <button className="bg-gray-500 hover:bg-gray-800 text-white px-4 py-2 rounded-md" aria-disabled={false} onClick={async () => {
            'use server';
            await signOut({ redirectTo: "/posts" });
        }}>Sign Out</button>
    </div>;
}

export default SignOutButton;