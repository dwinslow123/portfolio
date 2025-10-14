import Image from "next/image";

const Footer = () => {
    return (
        <div className="row-start-3 flex gap-[24px] flex-col items-center justify-center p-4 sm:p-8">
            <div className="border-t-2 border-gray-200 w-full"></div>
            <ul className="flex gap-4 flex-wrap justify-center">
                <li className="text-gray-600 text-sm justify-center flex gap-1 items-center">
                    <a href="https://github.com/dwinslow123" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors duration-300 justify-center flex gap-1 items-center">
                        <Image src="/assets/images/github.svg" alt="GitHub Logo" width={24} height={24} className="inline-block" /> Github
                    </a>
                </li>
                <li className="text-gray-600 text-sm justify-center flex gap-1 items-center">
                    <a href="https://linkedin.com/in/dwinslow123" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors duration-300 justify-center flex gap-1 items-center">
                        <Image src="/assets/images/linkedin.svg" alt="LinkedIn Logo" width={24} height={24} className="inline-block" /> LinkedIn
                    </a>
                </li>
                <li className="text-gray-600 text-sm justify-center flex gap-1 items-center">
                    <a href="https://medium.com/@dwinslow123" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors duration-300 justify-center flex gap-1 items-center">
                        <Image src="/assets/images/notebook.svg" alt="notebook" width={24} height={24} className="inline-block" /> Medium
                    </a>
                </li>
                <li className="text-gray-600 text-sm justify-center flex gap-1 items-center">
                    <a href="https://codepen.io/dwinslow123" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors duration-300 justify-center flex gap-1 items-center">
                        <Image src="/assets/images/codepen.svg" alt="CodePen Logo" width={24} height={24} className="inline-block" /> CodePen
                    </a>
                </li>
            </ul>
            <p className="text-gray-600 text-xs">Updated: {new Date().toLocaleDateString()}</p>
        </div>
    );
};

export default Footer;