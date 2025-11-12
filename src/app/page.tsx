'use client';
import Link from "next/link";
import ProjectsList from "./components/ProjectsList";
import { constants } from "@/app/lib/constants";

const Home = () => {

  return (
    <div className="row-start-2 flex flex-col gap-8 sm:gap-16 w-full max-w-8xl mx-auto">
      <header className="flex flex-col gap-4 sm:gap-2 w-full mx-auto sm:pl-50">
        <h1 className="text-4xl text-gray-900 sm:text-5xl font-extrabold text-left w-full sm:w-7/12">
          Dan Winslow
        </h1>
        <Link href={constants.ABOUT_URL} className="text-lg font-medium text-gray-700 hover:underline">
          Learn more about me &rarr;
        </Link>
      </header>
      <div className="border-b-2 border-gray-200 row-start-2 w-full"></div>
      <section className="row-start-3 flex flex-col gap-8 sm:gap-16 w-full max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-4">My Works</h2>
          <ProjectsList />
          <div className="text-center mt-8">
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;