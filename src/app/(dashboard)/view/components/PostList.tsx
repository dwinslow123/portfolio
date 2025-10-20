import { marked } from 'marked';

marked.use({
    gfm: true,
    breaks: true,
})
const PostList = (posts: any) => {
    return (
        <div>
            {posts.posts.map((post: any) => (
                <div key={post.id}>
                    <h2>{post.post_title}</h2>
                    <div className="border-1 border-gray-200 p-4 rounded-md" dangerouslySetInnerHTML={{ __html: marked.parse(post?.post_body) }}></div>
                </div>
            ))}
        </div>
    );
}

export default PostList;