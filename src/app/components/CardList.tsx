import Card from "./Card";

/** A component to display a list of Card components */
const CardList = ({ cardProps }: { cardProps: { TITLE: string; DESCRIPTION: string; CARD_IMAGE: string; URL: string; GITHUB_URL: string; }[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 overflow-scroll max-w-5xl mx-auto">
            {cardProps && cardProps.length > 0 ? cardProps.map((props, index) => (
                <Card
                    key={index}
                    title={props.TITLE}
                    description={props.DESCRIPTION}
                    imageUrl={props.CARD_IMAGE}
                    link={props.URL}
                    githubUrl={props.GITHUB_URL}
                />
            )) : (
                <p>No projects available.</p>
            )}
        </div>
    );
}

export default CardList;