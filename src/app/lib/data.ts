import { neon } from '@neondatabase/serverless';
const sql = neon(`${process.env.DATABASE_URL}`);

export const findAllPosts = async () => {
    const comments = await sql`SELECT * FROM comments`;
    return comments;
}