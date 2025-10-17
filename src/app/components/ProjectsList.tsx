import { card_details} from "@/constants"
import CardList from "./CardList";

/** A component to display a list of Project cards */
const ProjectsList = () => {
    const projectDetails = [card_details.VILLA_ORIGINALS, card_details.TAILWIND_CARD];
    return (
        <div className="w-full mx-auto my-8">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <CardList cardProps={projectDetails} />
        </div>
    );
}

export default ProjectsList;