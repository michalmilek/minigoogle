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
    <div>
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
        <h1 className="text-7xl">MM Searchbar</h1>
        <div className="flex gap-2 items-center justify-center">
          <MagnifyingGlassIcon className="h-8" />
          <div className="relative flex">
            <input
              type="text"
              className="border text-base w-[350px] px-4 py-2 border-gray-400 rounded-full"
            />
            <XMarkIcon className="h-8 absolute top-[50%] right-2 translate-y-[-50%]" />
          </div>
          <MicrophoneIcon className="h-8" />
        </div>
      </form>
    </div>
  );
}
