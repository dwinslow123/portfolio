import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans w-full grid grid-rows-[7.5rem_3rem_1fr_10px] min-h-screen p-6 sm:p-12 gap-8 sm:gap-16">
      <header className="flex flex-col sm:items-start row-start-1 gap-2">
        <div className="flex flex-col gap-2 sm:gap-4 items-center sm:items-start lg:pl-75 lg:pr-75 pl-15 pr-15">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-left">
            Dan Winslow
          </h1>
          <p className="text-lg font-medium sm:text-2xl text-gray-600 sm:text-left">Hi. I'm an experienced JavaScript Developer based in Chicago, Illinois.</p>
          <Link href="/about" className="text-lg font-medium text-blue-600 hover:underline">
            Learn more about me &rarr;
          </Link>
        </div>
      </header>
      <div className="border-b-2 border-gray-200 row-start-2 w-full " />
      <main className="row-start-3 flex flex-col gap-8 sm:gap-16 w-full max-w-3xl">
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Projects</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="test" className="text-blue-600 hover:underline">
                Project One
              </a>
              : A brief description of Project One.
            </li>
            <li>
              <a href="test" className="text-blue-600 hover:underline">
                Project Two
              </a>
              : A brief description of Project Two.
            </li>
            <li>
              <a href="test" className="text-blue-600 hover:underline">
                Project Three
              </a>
              : A brief description of Project Three.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Blog</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="test" className="text-blue-600 hover:underline">
                Blog Post One
              </a>
              : A brief summary of Blog Post One.
            </li>
            <li>
              <a href="test" className="text-blue-600 hover:underline">
                Blog Post Two
              </a>
              : A brief summary of Blog Post Two.
            </li>
            <li>
              <a href="test" className="text-blue-600 hover:underline">
                Blog Post Three
              </a>
              : A brief summary of Blog Post Three.
            </li>
          </ul>
        </section>
      </main>
      <footer className="row-start-4 flex gap-[24px] flex-wrap items-center justify-center">
        I am the footer.
      </footer>
    </div>
  );
}
