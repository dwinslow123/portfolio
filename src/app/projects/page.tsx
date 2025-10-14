import CardList from "@/app/components/cardList";
import { card_details } from "@/constants";
const Projects = () => {
    const projectDetails = [card_details.VILLA_ORIGINALS, card_details.DEFAULT_CARD, card_details.DEFAULT_CARD, card_details.DEFAULT_CARD, card_details.DEFAULT_CARD, card_details.DEFAULT_CARD];
    return (
        <div>
            <CardList cardProps={projectDetails} />
        </div>
    );
}

export default Projects;