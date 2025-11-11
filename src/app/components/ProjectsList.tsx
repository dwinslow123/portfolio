import { card_details } from "@/app/lib/constants"
import CardList from "./CardList";

/** A component to display a list of Project cards */
const ProjectsList = () => {
    const projectDetails = [
        { ID: 1, ...card_details.VILLA_ORIGINALS },
        { ID: 2, ...card_details.TAILWIND_CARD },
        { ID: 3, ...card_details.CONTACT_FORM_CARD }
    ];
    return (
        <div className="w-full mx-auto my-8 max-w-6xl px-4">
            <CardList cardProps={projectDetails} />
        </div>
    );
}

export default ProjectsList;