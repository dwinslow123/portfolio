const ProjectHeader = (project: { title: string, subHeading: string }) => {
    return (
        <header className="mb-8 font-bold text-left">
            <h1 className="text-4xl m-0 p-0">{project.title}</h1>
            <p className="text-gray-400 font-light text-xl mt-0.5 ml-1">{project.subHeading}</p>
        </header>
    );
};

export default ProjectHeader;