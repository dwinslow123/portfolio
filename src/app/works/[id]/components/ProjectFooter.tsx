const ProjectFooter = (project: { languages: string, libraries: string, tools: string }) => {
    const languages = project.languages.split(',').map((language: string) => language.trim());
    const libraries = project.libraries.split(',').map((library: string) => library.trim());
    const tools = project.tools.split(',').map((tool: string) => tool.trim());

    return (
        <footer className="mt-8 border-t pt-4 border-gray-200 w-full max-w-3xl mx-auto">
            <div className="mb-4">
                <h3 className="text-3xl font-semibold mb-2">
                    Technologies Used
                </h3>
            </div>
            <div className="mb-4 flex flex-col md:flex-row">
                <p className="font-semibold text-lg text-gray-800 flex items-center mr-4">Languages:</p>
                <ul className="flex flex-col md:flex-row text-gray-600 items-center justify-center">
                    {languages.map((language: string, index: number) => (
                        <li className="w-full md:w-auto flex flex-row text-gray-800 mx-4" key={index}>
                            <span className="px-2 text-xs flex justify-center items-center text-gray-600"> &#9679;</span>
                            {language}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4 flex flex-col md:flex-row">
                <p className="font-semibold text-lg text-gray-800 flex items-center mr-4">Frameworks & Libraries:</p>
                <ul className="flex flex-col md:flex-row text-gray-600 items-center justify-center">
                    {libraries.map((library: string, index: number) => (
                        <li className="w-full md:w-auto flex flex-row text-gray-800 mx-4" key={index}>
                            <span className="text-xs flex justify-center items-center mr-2 text-gray-600"> &#9679;</span>
                            {library}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4 flex flex-col md:flex-row">
                <p className="font-semibold text-lg text-gray-800 flex items-center mr-4">Tools & Platforms:</p>
                <ul className="flex flex-col md:flex-row text-gray-600 items-center justify-center">
                    {tools.map((tool: string, index: number) => (
                        <li className="w-full md:w-auto flex flex-row text-gray-800 mx-4" key={index}>
                            <span className="text-xs flex justify-center items-center mr-2 text-gray-600"> &#9679;</span>
                            {tool}
                        </li>
                    ))}
                </ul>
            </div>
        </footer >
    );
};

export default ProjectFooter;