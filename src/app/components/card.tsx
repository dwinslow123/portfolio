import { constants } from "@/constants";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    githubUrl: string;
}
/** A simple card component to display project information */
const Card = ({ title = 'Project Title', description = 'Short description', imageUrl = 'https://via.placeholder.com/300x150', link = 'testlink.com', githubUrl = constants.GITHUB_URL }: CardProps) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 flex flex-col gap-4 width-full">
            <div className="border-b-1 border-gray-300 text-2xl font-bold pb-3">Project</div>
            <div className="flex flex-col gap-2">
                <div className="border border-gray-300 rounded-lg h-40">
                    <img src={imageUrl} alt="Project Image" className="w-full h-full object-cover rounded-lg" />
                </div>
                <h4 className="text-lg font-semibold">{title}</h4>
                <p className="text-gray-700">{description}</p>
                <a href={link} className="text-blue-600 hover:underline">Link</a>
            </div>
            <div className="border-t-1 border-gray-300 text-xs text-gray-500 pt-3">{githubUrl}</div>
        </div>

    )
};

export default Card;