import Link from "next/link";
import { createPost } from "@/app/lib/data";
import { SignOutButton } from "@/app/components";

const EditPage = () => {
    return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <form action={async (formData: FormData) => {
            'use server';
            const title = formData.get('title') as string;
            const content = formData.get('content') as string;
            await createPost(title, content);
        }} className="flex flex-col gap-4 w-full max-w-md">
            <input 
                type="text" 
                name="title" 
                className="border border-gray-300 rounded-md p-2 w-full" 
                placeholder="Why I'm the best..." 
                required 
            />
            <textarea 
                name="content" 
                className="border border-gray-300 rounded-md p-2 w-full h-40" 
                placeholder="..." 
                required 
            />
            <button type="submit" className="bg-gray-500 hover:bg-gray-800 text-white px-4 py-2 rounded-md">
                Create Post
            </button>
        </form>
        <Link href="/view" className="text-blue-500 hover:underline">View All Posts</Link>
        <SignOutButton />
    </div>
    );
}

export default EditPage;