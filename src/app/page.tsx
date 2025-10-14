'use client';
import Link from "next/link";
import Card from "./components/card";
import { constants } from "@/constants";

const Home = () => {
  return (
    <div className="row-start-2 flex flex-col gap-8 sm:gap-16 w-full max-w-8xl mx-auto">
      <header className="flex flex-col gap-4 sm:gap-6 w-full mx-auto pl-20 sm:pl-50">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-left w-full sm:w-7/12">
          Dan Winslow
        </h1>
        <div className="text-lg font-medium text-gray-600 w-full sm:w-7/12">Hi. I&apos;m an experienced JavaScript Developer based in Chicago, Illinois.</div>
        <Link href={constants.ABOUT_URL} className="text-lg font-medium text-blue-600 hover:underline">
          Learn more about me &rarr;
        </Link>
      </header>
      <div className="border-b-2 border-gray-200 row-start-2 w-full"></div>
      <section className="row-start-3 flex flex-col gap-8 sm:gap-16 w-full max-w-3xl mx-auto">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card title="Tailwind CSS Card" description="Simple Tailwind CSS card component" imageUrl={constants.IMAGE_NOT_FOUND} link="testlink.com" githubUrl={constants.GITHUB_URL} />
            <Card title="Project 2" description="description" imageUrl={constants.IMAGE_NOT_FOUND} link="testlink.com" githubUrl={constants.GITHUB_URL} />
            <Card title="Project 3" description="description" imageUrl={constants.IMAGE_NOT_FOUND} link="testlink.com" githubUrl={constants.GITHUB_URL} />
          </div>
          <div className="text-center mt-8">
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;