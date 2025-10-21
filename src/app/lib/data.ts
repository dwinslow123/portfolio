import { neon } from '@neondatabase/serverless';
const sql = neon(`${process.env.DATABASE_URL}`);

export const findAllPosts: () => Promise<Record<string, any>[]> = async () => {
    const posts = await sql`SELECT * FROM posts WHERE isDeleted = FALSE`;
    return posts;
}

export const findPostById: (id: number) => Promise<Record<string, any>> = async (id: number) => {
    const post = await sql`SELECT * FROM posts WHERE id = ${id} AND isDeleted = FALSE`;
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
    await sql`UPDATE posts SET isDeleted = TRUE WHERE id = ${id}`;
}
