import { neon } from '@neondatabase/serverless';
const sql = neon(`${process.env.DATABASE_URL}`);

export const findAllPosts = async () => {
    const posts = await sql`SELECT * FROM posts`;
    return posts;
}