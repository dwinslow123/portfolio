export type User = {
    id?: string,
    email?: string,
    firstName?: string,
    lastName?: string,
    isAdmin?: boolean,
    password?: string,
};

export type Constants = {
    HOME_URL: string;
    ABOUT_URL: string;
    PROJECTS_URL: string;
    CONTACT_URL: string;
    POSTS_URL: string;
    GITHUB_URL: string;
    IMAGE_NOT_FOUND: string;
    RESUME_URL: string;
    MAINTENANCE_URL: string;
    CONTACT_EMAIL: string;
    PAGE_NOT_FOUND_IMAGE: string;
    };
export type CardDetails ={
    VILLA_ORIGINALS: {
        URL: string;
        GITHUB_URL: string;
        CARD_IMAGE: string;
        TITLE: string;
        DESCRIPTION: string;
    };
    TAILWIND_CARD: {
        URL: string;
        GITHUB_URL: string;
        CARD_IMAGE: string;
        TITLE: string;
        DESCRIPTION: string;
    }
    DEFAULT_CARD: {
        URL: string;
        GITHUB_URL: string;
        CARD_IMAGE: string;
        TITLE: string;
        DESCRIPTION: string;
    };
}