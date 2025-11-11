import Link from "next/link";
import { findPostById } from "@/app/lib/data";
import MarkdownRenderer from "../../../components/MarkdownRenderer";
import style from "./FullPost.module.css";


interface FullPostProps {
    id: number;
};

interface MarkdownCodeProps {
    ReactNode: any;
    inline: boolean;
    className: string;
    children: React.ReactNode;
}

const FullPost = async ({ id }: FullPostProps) => {
    const post = await findPostById(id);

    return (
        <div className="flex flex-col gap-6 p-6 md:p-0 w-full max-w-5xl mx-auto">
            <Link href="/posts" className="text-2xl font-semibold text-gray-700 hover:underline"> &#8592; All Posts</Link>
            <div className="w-full max-w-md md:max-w-3xl mx-auto mb-4 mt-6">
                <div className="mb-2">
                    <h1 className="text-3xl font-bold">
                        {post.post_title}
                    </h1>
                </div>
                <p className="text-sm text-gray-500">{new Date(post.updatedat).toLocaleDateString()}</p>
                <div className={`${style.reactMarkdown} w-full mt-6 md:max-w-none`}>
                    <MarkdownRenderer>{post.post_body}</MarkdownRenderer>
                </div>
            </div>
        </div>
    );
};

export default FullPost;