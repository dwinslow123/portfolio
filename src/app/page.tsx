'use client';
import Link from "next/link";
import Card from "./components/card";
import { constants } from "@/constants";

const Home = () => {
  return (
    <div className="font-sans w-full grid grid-rows-[7.5rem_3rem_1fr_10px] min-h-screen p-6 sm:p-12 gap-8 sm:gap-16">
      <header className="flex flex-col sm:items-start row-start-1 gap-2 pl-15 md:pl-40 md:pr-25 w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-left">
          Dan Winslow
        </h1>
        <div className="text-lg font-medium sm:text-2xl text-gray-600 sm:text-left w-full sm:w-7/12">Hi. I'm an experienced JavaScript Developer based in Chicago, Illinois.</div>
        <Link href={constants.ABOUT_URL} className="text-lg font-medium text-blue-600 hover:underline">
          Learn more about me &rarr;
        </Link>
      </header>
      <div className="border-b-2 border-gray-200 row-start-2 w-full"></div>
      <section className="row-start-3 flex flex-col gap-8 sm:gap-16 w-full max-w-3xl mx-auto">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card title="Project 1" description="description" imageUrl="test.com" link="testlink.com" githubUrl={constants.GITHUB_URL} />
            <Card title="Project 2" description="description" imageUrl="test.com" link="testlink.com" githubUrl={constants.GITHUB_URL} />
            <Card title="Project 3" description="description" imageUrl="test.com" link="testlink.com" githubUrl={constants.GITHUB_URL} />
          </div>
          <div className="text-center mt-8">
          </div>
        </div>
      </section>
      <footer className="row-start-4 flex gap-[24px] flex-wrap items-center justify-center">
        I am the footer.
      </footer>
    </div>
  );
}

export default Home;