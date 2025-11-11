import Image from "next/image";
import Link from "next/link";
import { card_details } from "@/app/lib/constants";
interface CardProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    githubUrl: string;
}
/** A simple card component to display project information */
const Card = ({ title = card_details.DEFAULT_CARD.TITLE, description = card_details.DEFAULT_CARD.DESCRIPTION, imageUrl = card_details.DEFAULT_CARD.CARD_IMAGE, link = card_details.DEFAULT_CARD.URL, githubUrl = card_details.DEFAULT_CARD.GITHUB_URL, id = 1 }: CardProps) => {
    return (
        <div className="border border-gray-300 rounded-lg p-4 flex flex-col gap-4 w-full bg-white shadow-xl bottom-shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="bg-gray-100 text-2xl font-bold p-3 rounded flex">
                <p className="text-gray-800 w-full">{title}</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="border border-gray-300 rounded-lg h-45 hover:transform hover:opacity-75 hover:scale-95 transition-transform duration-300 ease-in-out overflow-hidden">
                    <Link href={`works/${id}`} className="block w-full h-full">
                        <Image src={imageUrl} alt="Project Image" width={300} height={150} className="w-full h-full object-cover rounded-lg" />
                    </Link>
                </div>
                <p className="h-40 text-gray-700 bg-gray-100 p-4 rounded">{description}</p>
            </div>
            <div className="border-t-1 border-gray-300 text-xs text-gray-500 pt-3">
                <a href={githubUrl} className="text-blue-600 hover:underline">
                    Source Code
                </a>
            </div>
        </div>

    )
};

export default Card;