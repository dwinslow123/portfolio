import { card_details } from "@/app/lib/constants"
import CardList from "./CardList";

/** A component to display a list of Project cards */
const ProjectsList = () => {
    const projectDetails = [ card_details.VILLA_ORIGINALS, card_details.TAILWIND_CARD, card_details.CONTACT_FORM_CARD ];
    return (
        <div className="w-full mx-auto my-8 max-w-6xl px-4">
            <CardList cardProps={projectDetails} />
        </div>
    );
}

export default ProjectsList;