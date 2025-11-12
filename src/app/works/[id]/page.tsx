import Image from "next/image";
import { findProjectById } from "@/app/lib/data";
import ProjectHeader from "./components/ProjectHeader";
import GithubLogo from "./components/GithubLogo";
import ProjectFooter from "./components/ProjectFooter";

type ProjectDetailsProps = {
    params: Promise<{
        id: string;
    }>;
};

const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
    const { id }: { id: string } = await params;
    const project = await findProjectById(id);
    const projectFeatures = project.features.split(',').map((feature: string) => feature.trim());

    return (
        <div className="container mx-auto p-4 max-w-3xl">
            <ProjectHeader title={project.title} subHeading={project.subHeading} />
            <div className="w-full flex flex-col items-center">
                <Image className="mb-4 rounded-lg flex items-center justify-center border-1 border-gray-300" src={project.imageurl} alt={project.title} width={600} height={400} />
                <div className="flex flex-col gap-4 md:flex-row w-full items-center">
                    <div className="mt-4 flex flex-1 flex-col sm:flex-row w-full items-center border-gray-300 gap-4">
                        <button className="rounded-lg bg-gray-900 px-4 py-2 hover:bg-blue-700 transition-all duration-200 ease-in-out w-45">
                            <a className="text-gray-100" href={project.demourl}>Visit Project &#x2197;</a>
                        </button>
                        <div className="border-solid border-1 border-gray-300 w-full flex-1 hidden md:block"></div>
                        <button className="rounded-lg bg-gray-900 px-4 py-2 hover:bg-blue-700 transition-all duration-200 ease-in-out  fill-gray-100 stroke-1 stroke-gray-100 w-45">
                            <a className="text-gray-100 fill-gray-100 stroke-1 stroke-gray-100" href={project.githuburl}>Source Code <GithubLogo className="w-6 h-6 inline-block ml-2" /></a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg leading-relaxed">{project.description}</p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul>
                    {projectFeatures.map((feature: string, index: number) => (
                        <li key={index} className="text-lg leading-relaxed mb-2">- {feature}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Takeaways</h2>
                <p className="text-lg leading-relaxed">{project.takeaways}</p>
            </div>
            <div>
                <div className="mt-8">
                    <ProjectFooter languages={project.languages} libraries={project.libraries} tools={project.tools} />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;