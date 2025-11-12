import { constants } from "@/app/lib/constants";
import Link from "next/link";

const About = () => {
    return (
        <div className="row-start-2 flex flex-col gap-8 sm:gap-16 w-full max-w-8xl mx-auto p-8">
            <header className="flex flex-col gap-4 sm:gap-6 w-full mx-auto md:pl-50">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-left w-full sm:w-7/12">
                    About Me
                </h1>
                <div className="text-lg font-medium text-gray-600 w-full sm:w-7/12">
                    I&apos;m Dan Winslow, a seasoned JavaScript Developer based in Chicago, Illinois. With a passion for crafting efficient and scalable web applications, I specialize in React, Node.js, and modern front-end technologies. When I&apos;m not coding, I enjoy blogging about tech trends and exploring new programming languages.
                </div>
                <Link href={constants.CONTACT_EMAIL} className="text-lg font-medium text-blue-600 hover:underline">
                    Get in Touch &rarr;
                </Link>
                <Link href={constants.RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-600 hover:underline">
                    View my Resume &rarr;
                </Link>
            </header>
            <div className="border-b-2 border-gray-200 row-start-2 w-full"></div>
            <section className="row-start-3 flex flex-col gap-8 sm:gap-16 w-full sm:w-7/12 pl-50 sm:mx-auto sm:pl-0">
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Skills & Technologies</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Proficient in JavaScript, TypeScript, React, Node.js, and Express.</li>
                        <li>Experience with databases such as MongoDB, PostgreSQL, and MySQL.</li>
                        <li>Familiar with cloud platforms like AWS and Azure.</li>
                        <li>Strong understanding of RESTful APIs and GraphQL.</li>
                        <li>Knowledge of CI/CD pipelines and DevOps practices.</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Experience</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>5+ years of experience in full-stack web development.</li>
                        <li>Worked on diverse projects ranging from e-commerce platforms to SaaS applications.</li>
                        <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Education</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>First Cohort of Bloomtech Institute of Technology (formerly Lambda School)</li>
                        <li>Continuous learner, always exploring new technologies and frameworks.</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default About;