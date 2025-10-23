import { card_details } from "@/app/lib/constants"
import CardList from "./CardList";

/** A component to display a list of Project cards */
const ProjectsList = () => {
    const projectDetails = [ card_details.VILLA_ORIGINALS, card_details.TAILWIND_CARD ];
    return (
        <div className="w-full mx-auto my-8 max-w-6xl px-4">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <CardList cardProps={projectDetails} />
        </div>
    );
}

export default ProjectsList;