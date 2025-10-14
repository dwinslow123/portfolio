interface Constants {
    HOME_URL: string;
    ABOUT_URL: string;
    PROJECTS_URL: string;
    CONTACT_URL: string;
    POSTS_URL: string;
    GITHUB_URL: string;
    IMAGE_NOT_FOUND: string;
    RESUME_URL: string;
    MAINTENANCE_URL: string;
    };
interface CardDetails {
    VILLA_ORIGINALS: {
        URL: string;
        GITHUB_URL: string;
        CARD_IMAGE: string;
        TITLE: string;
        DESCRIPTION: string;
    };
    DEFAULT_CARD: {
        URL: string;
        GITHUB_URL: string;
        CARD_IMAGE: string;
        TITLE: string;
        DESCRIPTION: string;
    };
}
export const constants: Constants = {
    HOME_URL: "/",
    ABOUT_URL: "/about",
    PROJECTS_URL: "/projects",
    CONTACT_URL: "/contact",
    POSTS_URL: "/posts",
    GITHUB_URL: "https://github.com/dwinslow123",
    IMAGE_NOT_FOUND: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/placeholder.png",
    RESUME_URL: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/dan_winslow.pdf",
    MAINTENANCE_URL: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/maintenance.png",
}

export const card_details: CardDetails = {
    VILLA_ORIGINALS: {
        URL: "https://villaoriginals.com",
        GITHUB_URL: "https://github.com/dwinslow123/villaOriginals",
        CARD_IMAGE: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/villaoriginals.com_.png",
        TITLE: "Villa Originals",
        DESCRIPTION: "Site made for a local hair salon"
    },
    DEFAULT_CARD: {
        URL: "https://danwinslow.dev",
        GITHUB_URL: "https://github.com/dwinslow123",
        CARD_IMAGE: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/placeholder.png",
        TITLE: "Project Title",
        DESCRIPTION: "Project to showcase skills!"
    }
}