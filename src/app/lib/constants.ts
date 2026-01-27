import { CardDetails, Constants } from "./definitions";

export const constants: Constants = {
    HOME_URL: "/",
    ABOUT_URL: "/about",
    WORKS_URL: "/works",
    CONTACT_URL: "/contact",
    POSTS_URL: "/posts",
    GITHUB_URL: "https://github.com/dwinslow123",
    IMAGE_NOT_FOUND: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/placeholder.png",
    RESUME_URL: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/dan_winslow.pdf",
    MAINTENANCE_URL: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/maintenance.png",
    CONTACT_EMAIL: "mailto:dan@danwinslow.dev",
    PAGE_NOT_FOUND_IMAGE: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/404_error.png",
}

export const card_details: CardDetails = {
    VILLA_ORIGINALS: {
        URL: "https://villaoriginals.com",
        GITHUB_URL: "https://github.com/dwinslow123/villaOriginals",
        CARD_IMAGE: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/villa_originals.png",
        TITLE: "Villa Originals",
        DESCRIPTION: "Site made for a local hair salon. Using Next.js and Tailwind CSS as well as my contact form on the contact page."
    },
    DEFAULT_CARD: {
        URL: "https://danwinslow.dev",
        GITHUB_URL: "https://github.com/dwinslow123",
        CARD_IMAGE: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/placeholder.png",
        TITLE: "Project Title",
        DESCRIPTION: "Placeholder Project"
    },
    TAILWIND_CARD: {
        URL: "https://codepen.io/Dwinslow123/pen/ogbGoWW",
        GITHUB_URL: "https://github.com/dwinslow123/tailwind_card_component",
        CARD_IMAGE: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/card_cover.png",
        TITLE: "Tailwind CSS Card",
        DESCRIPTION: "A card component built with Tailwind CSS, used to display project information."
    },
    CONTACT_FORM_CARD: {
        URL: "https://contact-form-demo-aa2gc5qqo-dwinslow123s-projects.vercel.app/",
        GITHUB_URL: "https://github.com/dwinslow123/contact_form_demo",
        CARD_IMAGE: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/contact_form_demo.png",
        TITLE: "Contact Form",
        DESCRIPTION: "A contact form demo built with Next.js and Nodemailer to send emails. Demo is functional."
    },
    JOYWIN_DIGITAL: {
        URL: "https://joywin.digital",
        CARD_IMAGE: "https://g5gi6ozjbngbtteo.public.blob.vercel-storage.com/joywin_digital.png",
        TITLE: "Joywin Digital",
        DESCRIPTION: "A website made for a digital marketing agency. Built with Vite.",
    }
}