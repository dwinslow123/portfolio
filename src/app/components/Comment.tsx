import { neon } from "@neondatabase/serverless";

const Comment = () => {
    const create = async ({formData}: {formData: FormData}) => {
        'use server';
        const sql = neon(`${process.env.DATABASE_URL}`);
        const comment = formData.get('comment');
        await sql('INSERT INTO comments (comment) VALUES ($1)', [comment]);
    }

    return (
        <form action={create}>
            <input type="text" placeholder="Leave a comment" name="comment" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Comment;