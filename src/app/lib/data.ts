import { neon } from '@neondatabase/serverless';
const sql = neon(`${process.env.DATABASE_URL}`);

export const findAllPosts: () => Promise<Record<string, any>[]> = async () => {
    const posts = await sql`SELECT * FROM posts WHERE isDeleted = FALSE`;
    return posts;
}

export const findPostById: (id: number) => Promise<Record<string, any>> = async (id: number) => {
    const post = await sql`SELECT * FROM posts WHERE id = ${id} AND isDeleted = FALSE`;
    return post[ 0 ];
}

export const createPost = async (title: string, content: string) => {
    const result = await sql`INSERT INTO Posts (post_title, post_body, isDeleted) VALUES (${title}, ${content}, false)`;
    return result[ 0 ];
}

export const updatePost = async (id: number, title: string, content: string, slug: string) => {
    const result = await sql`UPDATE posts SET post_title = ${title}, post_content = ${content}, slug = ${slug} WHERE id = ${id} RETURNING *`;
    return result[ 0 ];
}

export const deletePost = async (id: number) => {
    await sql`UPDATE posts SET isDeleted = TRUE WHERE id = ${id}`;
}

export const createProject = async (title: string, description: string, imageUrl: string, link: string, githubUrl: string) => {
    const result = await sql`INSERT INTO Projects (title, description, image_url, link, github_url, isDeleted) VALUES (${title}, ${description}, ${imageUrl}, ${link}, ${githubUrl}, false)`;
    return result[ 0 ];
}

export const findAllProjects: () => Promise<Record<string, any>[]> = async () => {
    const projects = await sql`SELECT * FROM Projects WHERE isDeleted = FALSE`;
    return projects;
}

export const findProjectById: (id: string) => Promise<Record<string, any>> = async (id: string) => {
    const number = Number(await id);
    const project = await sql`SELECT * FROM Projects WHERE id = ${number} AND isDeleted = FALSE`;
    return project[ 0 ];
}

export const updateProject = async (id: number, title: string, description: string, imageUrl: string, link: string, githubUrl: string) => {
    const result = await sql`UPDATE Projects SET title = ${title}, description = ${description}, image_url = ${imageUrl}, link = ${link}, github_url = ${githubUrl} WHERE id = ${id} RETURNING *`;
    return result[ 0 ];
}

export const deleteProject = async (id: number) => {
    await sql`UPDATE Projects SET isDeleted = TRUE WHERE id = ${id}`;
}