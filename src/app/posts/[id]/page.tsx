import FullPost from "./components/FullPost";

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div className="row-start-2 flex flex-col gap-8 sm:gap-16 w-full mx-auto">
            <FullPost id={Number(id)} />
        </div>
    );
};

export default Post;