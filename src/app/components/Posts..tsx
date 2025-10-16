import { findAllPosts } from "../lib/data";

const Posts = async () => {
    const posts = await findAllPosts();
  return (

    <div className="max-w-xl w-full mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">Comments</h1>
        <ul className="space-y-4">
            {posts.map((post) => (
                <li key={post.id} className="p-4 border rounded-lg shadow-sm">
                    <p className="text-gray-800">{post.title}</p>
                    <p className="text-sm text-gray-500 mt-2">- {post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Posts;