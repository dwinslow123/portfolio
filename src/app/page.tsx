'use client';
import Link from "next/link";
import CardList from "./components/cardList";
import { constants, card_details } from "@/constants";

const Home = () => {


  const projectDetails = [card_details.VILLA_ORIGINALS, card_details.DEFAULT_CARD, card_details.DEFAULT_CARD, card_details.DEFAULT_CARD, card_details.DEFAULT_CARD, card_details.DEFAULT_CARD];
  return (
    <div className="row-start-2 flex flex-col gap-8 sm:gap-16 w-full max-w-8xl mx-auto p-8">
      <header className="flex flex-col gap-4 sm:gap-2 w-full mx-auto pl-20 sm:pl-50">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-left w-full sm:w-7/12">
          Dan Winslow
        </h1>
        <Link href={constants.ABOUT_URL} className="text-lg font-medium text-blue-600 hover:underline">
          Learn more about me &rarr;
        </Link>
      </header>
      <div className="border-b-2 border-gray-200 row-start-2 w-full"></div>
      <section className="row-start-3 flex flex-col gap-8 sm:gap-16 w-full max-w-5xl mx-auto">
        <div>
          <CardList cardProps={projectDetails} />
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card title="Tailwind CSS Card" description="Tailwind CSS card component" imageUrl={constants.IMAGE_NOT_FOUND} link="testlink.com" githubUrl={constants.GITHUB_URL} />
            <Card title="Villa Originals" description="Site made for a local hair salon" imageUrl={constants.VILLA_ORIGINALS.CARD_IMAGE} link={constants.VILLA_ORIGINALS.URL} githubUrl={constants.VILLA_ORIGINALS.GITHUB_URL} />
            <Card title="Project 3" description="description" imageUrl={constants.IMAGE_NOT_FOUND} link="testlink.com" githubUrl={constants.GITHUB_URL} />
          </div> */}
          <div className="text-center mt-8">
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;