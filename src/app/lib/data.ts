import { neon } from '@neondatabase/serverless';
const sql = neon(`${process.env.DATABASE_URL}`);

export const findAllPosts = async () => {
    const posts = await sql`SELECT * FROM posts WHERE isDeleted = false`;
    return posts;
}

export const findPostBySlug = async (slug: string) => {
    const post = await sql`SELECT * FROM posts WHERE slug = ${slug}`;
    return post[0];
}

export const createPost = async (title: string, content: string) => {
    const result = await sql`INSERT INTO Posts (post_title, post_body, isDeleted) VALUES (${title}, ${content}, false)`;
    return result[0];
}

export const updatePost = async (id: number, title: string, content: string, slug: string) => {
    const result = await sql`UPDATE posts SET post_title = ${title}, post_content = ${content}, slug = ${slug} WHERE id = ${id} RETURNING *`;
    return result[0];
}

export const deletePost = async (id: number) => {
    await sql`DELETE FROM posts WHERE id = ${id}`;
}
