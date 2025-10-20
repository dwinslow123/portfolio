import Link from "next/link";
import { findAllPosts } from "@/app/lib/data";
import PostList from "./components/PostList";

const ViewPage = async () => {
    const posts = await findAllPosts();
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold mb-6">All Posts</h1>
            <div className="w-full max-w-2xl space-y-4">
                <PostList posts={posts} />
            </div>
            <Link href="/edit" className="text-blue-500 hover:underline">Create New Post</Link>
        </div>
    );
}
export default ViewPage;