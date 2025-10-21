import Posts from "../components/Posts";
import { findAllPosts } from "../lib/data";

const PostsPage = async () => {
    const posts = await findAllPosts();
    
    return (
        <div className="row-start-2 flex flex-col gap-8 sm:gap-16 w-full max-w-3xl mx-auto">
            <Posts posts={posts} />
        </div>
    );
}

export default PostsPage;