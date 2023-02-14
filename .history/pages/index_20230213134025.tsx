import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex flex-col min-w-[100vw] justify-between">
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Header />

      <form className="flex flex-col items-center justify-center gap-5">
        <h1 className="md:text-7xl text-3xl">MM Searchbar</h1>
        <div className="flex flex-grow flex-shrink gap-2 items-center justify-center">
          <MagnifyingGlassIcon className="h-8" />
          <div className="relative flex w-[90%] md:w-[350px]">
            <input
              type="text"
              className="border transition-all outline-none ring-0 focus:drop-shadow-2xl  text-base w-[100%] h-[100%] px-4 py-2 border-gray-400 rounded-full"
            />
            <XMarkIcon className="h-8 absolute top-[50%] right-2 translate-y-[-50%]" />
          </div>
          <MicrophoneIcon className="h-8" />
        </div>
        <div className="flex mt-8 gap-4 md:text-lg">
          <button className="bg-black text-white px-3 py-2 rounded-lg">
            Search
          </button>
          <button className="bg-black text-white px-3 py-2 rounded-lg">
            Fluke
          </button>
        </div>
      </form>
    </div>
  );
}
