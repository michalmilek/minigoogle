import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
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
        <div className="flex relative gap-2">
          <MagnifyingGlassIcon className="h-8" />
          <input
            type="text"
            className="border w-[350px] border-gray-400 rounded-full"
          />
          <MicrophoneIcon className="h-8" />
        </div>
      </form>
    </div>
  );
}
