import Link from "next/link";
import Markdown from "marked-react";
import { updateTimeStamp } from "../lib/actions";

const Posts = async ({ posts }: { posts: Record<string, any>[] }) => {    
    return (
    <div className="w-full p-6 ml-4 md:ml-0">
        <h1 className="text-3xl font-bold">Posts</h1>
        <p className="mb-4 text-xl text-gray-500">My most recent blog posts</p>
        <ul className="space-y-6 m-4 pl-6">
            {posts.map((post) => (
                <li key={post.id} className="list-disc pl-5 m-8 marker:text-gray-500">
                    <Link href={`/posts/${post.id}`} className="text-xl font-semibold text-gray-700 hover:underline">
                        <Markdown>{post.post_title}</Markdown>
                    </Link>
                    <p className="text-sm text-gray-500">{updateTimeStamp(post.updatedat)}</p>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Posts;